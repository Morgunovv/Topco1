import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import Error from 'next/error';

// Импортируем стили
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }: AppProps) {
    if (pageProps.error) {
        return <Error
            statusCode={pageProps.error.statusCode}
            title={pageProps.error.message}
        />;
    }

    return (
        <ConfigProvider>
            <PlasmicRootProvider
                loader={PLASMIC}
                prefetchedData={pageProps.plasmicData}
            >
                <Component {...pageProps} />
            </PlasmicRootProvider>
        </ConfigProvider>
    );
}