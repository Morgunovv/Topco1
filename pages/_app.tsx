import type { AppProps } from 'next/app';
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PlasmicRootProvider
            loader={PLASMIC}
            prefetchedData={pageProps.plasmicData}
        >
            <Component {...pageProps} />
        </PlasmicRootProvider>
    );
}