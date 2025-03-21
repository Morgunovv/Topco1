'use client';

import React from 'react';
import { createCache, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

const cache = createCache();

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
    return (
        <StyleProvider cache={cache}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1890ff',
                    },
                    components: {
                        Menu: {
                            itemBg: 'transparent',
                            itemHeight: 40,
                            itemHoverColor: '#1890ff',
                            itemSelectedColor: '#1890ff',
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </StyleProvider>
    );
} 