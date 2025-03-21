import React from 'react';
import { Menu } from '@plasmicpkgs/antd5';
import type { MenuItemProps } from '@plasmicpkgs/antd5/dist/Menu';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

// Используем только один импорт Menu из @plasmicpkgs/antd5
export const MenuItem: React.FC<MenuItemProps> = (props) => {
    return <Menu.Item {...props} />;
};

export function MenuItemComponent(props) {
    return <PlasmicComponent component="MenuItem" {...props} />;
}

export type { MenuItemProps }; 
} 