import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#00b96b',
    },
    components: {
        Menu: {
            itemBg: 'transparent',
            itemHeight: 40,
            itemHoverColor: '#1890ff',
            itemSelectedColor: '#1890ff',
        },
    },
}; 