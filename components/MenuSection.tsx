import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

export function MenuSection({ children }: { children: React.ReactNode }) {
    return (
        <Menu mode="horizontal">
            {children}
        </Menu>
    );
} 