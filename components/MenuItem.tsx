import React from 'react';
import { Menu } from 'antd';
import type { MenuItemProps } from 'antd/lib/menu/MenuItem';
// или если вы используете @plasmicpkgs/antd5
import { Menu } from '@plasmicpkgs/antd5';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

// Используем тип из antd для пропсов
export interface CustomMenuItemProps extends MenuItemProps {
    children?: React.ReactNode;
}

export const MenuItem: React.FC<CustomMenuItemProps> = ({ children, ...props }) => {
    return <Menu.Item {...props}>{children}</Menu.Item>;
};

export function MenuItemComponent(props) {
    return <PlasmicComponent component="MenuItem" {...props} />;
}

export const MenuItem = Menu.Item;

export type { MenuItemProps }; 
} 