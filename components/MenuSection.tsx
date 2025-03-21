import { Menu } from 'antd';
import type { MenuProps } from 'antd';

interface MenuSectionProps extends MenuProps {
    children: React.ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ children, ...props }) => {
    return (
        <Menu mode="horizontal" {...props}>
            {children}
        </Menu>
    );
}; 