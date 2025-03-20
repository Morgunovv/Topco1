import React from 'react';
import { Menu } from 'antd';
import type { MenuItemProps } from 'antd';
// или если вы используете @plasmicpkgs/antd5
import { Menu } from '@plasmicpkgs/antd5';

export function MenuItem({ children, ...props }: MenuItemProps & { children: React.ReactNode }) {
    return (
        <Menu.Item {...props}>
            {children}
        </Menu.Item>
    );
} 