import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import * as React from 'react';
import '../styles/fonts.css';

// Определяем все варианты шрифта InterDisplay
const interDisplay = localFont({
    src: [
        {
            path: '../public/fonts/InterDisplay-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/InterDisplay-Black.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-inter-display'
});

export default function MyApp({ Component, pageProps }: AppProps) {
    // Добавляем CSS переменную в body
    React.useEffect(() => {
        document.body.classList.add(interDisplay.variable);
    }, []);

    return <Component {...pageProps} />;
} 