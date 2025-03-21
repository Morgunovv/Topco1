import { Menu } from 'antd';
import type { MenuProps } from 'antd';

// Используем тип из antd для пропсов
export interface MenuSectionProps extends MenuProps {
    children?: React.ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ children, ...props }) => {
    return (
        <Menu mode="horizontal" {...props}>
            {children}
        </Menu>
    );
};

export type { MenuProps }; 