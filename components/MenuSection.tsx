import React from 'react';
import { Menu } from '@plasmicpkgs/antd5';
import type { MenuProps } from '@plasmicpkgs/antd5/dist/Menu';

// Используем тип из antd для пропсов
export interface MenuSectionProps extends MenuProps {
    children?: React.ReactNode;
}

export const MenuSection: React.FC<MenuProps> = ({ children, ...props }) => {
    return (
        <Menu mode="horizontal" {...props}>
            {children}
        </Menu>
    );
};

export type { MenuProps }; 