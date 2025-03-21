import type { AppProps } from 'next/app';
import { ConfigProvider, App as AntdApp } from 'antd';
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import Error from 'next/error';
import { theme } from '../utils/theme';
import { useEffect, useState } from 'react';
import AntdRegistry from '../components/AntdRegistry';

// Импортируем стили
import 'antd/dist/reset.css';
import '../styles/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (pageProps.error) {
        return <Error
            statusCode={pageProps.error.statusCode}
            title={pageProps.error.message}
        />;
    }

    return (
        <AntdRegistry>
            {mounted && (
                <ConfigProvider theme={theme}>
                    <AntdApp>
                        <PlasmicRootProvider
                            loader={PLASMIC}
                            prefetchedData={pageProps.plasmicData}
                        >
                            <Component {...pageProps} />
                        </PlasmicRootProvider>
                    </AntdApp>
                </ConfigProvider>
            )}
        </AntdRegistry>
    );
}

export default MyApp;