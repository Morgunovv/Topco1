import { Menu } from 'antd';
// или если вы используете @plasmicpkgs/antd5
import { Menu } from '@plasmicpkgs/antd5';

export function MenuItem({ children, ...props }) {
    return (
        <Menu.Item {...props}>
            {children}
        </Menu.Item>
    );
} 