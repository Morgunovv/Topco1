import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';

interface MenuWrapperProps extends MenuProps {
    children?: React.ReactNode;
}

export function MenuWrapper({ children, ...props }: MenuWrapperProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Menu
            mode="horizontal"
            style={{
                background: 'transparent',
                borderBottom: 'none',
            }}
            {...props}
        >
            {children}
        </Menu>
    );
} 