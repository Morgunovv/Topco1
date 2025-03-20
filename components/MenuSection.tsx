import { Menu } from 'antd';

export function MenuSection({ children }) {
    return (
        <Menu mode="horizontal">
            {children}
        </Menu>
    );
} 