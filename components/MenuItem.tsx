import React from 'react';
import { Menu } from 'antd';
import type { MenuItemProps } from 'antd/es/menu/MenuItem';
// или если вы используете @plasmicpkgs/antd5
import { Menu } from '@plasmicpkgs/antd5';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    return <Menu.Item {...props} />;
};

export function MenuItemComponent(props) {
    return <PlasmicComponent component="MenuItem" {...props} />;
} 