import React from 'react';
import { Menu } from 'antd';
import type { MenuItemProps } from 'antd';
// или если вы используете @plasmicpkgs/antd5
import { Menu } from '@plasmicpkgs/antd5';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

export function MenuItem(props) {
    return <PlasmicComponent component="MenuItem" {...props} />;
} 