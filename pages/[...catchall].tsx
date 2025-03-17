import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";

import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "../plasmic-init";

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    console.log('getStaticProps starting with params:', context.params);

    const { catchall } = context.params ?? {};
    const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';

    console.log('Fetching Plasmic data for path:', plasmicPath);

    const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
    console.log('Plasmic data fetched:', !!plasmicData);

    if (!plasmicData) {
      console.log('No Plasmic data found for path:', plasmicPath);
      return { notFound: true };
    }

    const pageMeta = plasmicData.entryCompMetas[0];
    console.log('Page meta:', pageMeta);

    const queryCache = await extractPlasmicQueryData(
      <PlasmicRootProvider
        loader={PLASMIC}
        prefetchedData={plasmicData}
        pageRoute={pageMeta.path}
        pageParams={pageMeta.params}
      >
        <PlasmicComponent component={pageMeta.displayName} />
      </PlasmicRootProvider>
    );

    return {
      props: {
        plasmicData,
        queryCache,
        debug: {
          path: plasmicPath,
          hasPlasmicData: !!plasmicData,
          pageMetaExists: !!pageMeta
        }
      },
      revalidate: 60
    };
  } catch (err) {
    // Правильная обработка ошибки с типизацией
    const error = err as { message?: string; stack?: string };
    return {
      props: {
        error: {
          message: error.message || 'Unknown error occurred',
          stack: error.stack || ''
        }
      },
      revalidate: 60
    };
  }
};

// Обновляем типы для компонента
type PlasmicLoaderPageProps = {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
  error?: {
    message: string;
    stack?: string;
  };
  debug?: any;
};

export default function PlasmicLoaderPage(props: PlasmicLoaderPageProps) {
  const { plasmicData, queryCache, error, debug } = props;
  const router = useRouter();

  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Error occurred</h1>
        <pre>{error.message}</pre>
        {error.stack && (
          <details>
            <summary>Stack trace</summary>
            <pre>{error.stack}</pre>
          </details>
        )}
        {debug && (
          <details>
            <summary>Debug info</summary>
            <pre>{JSON.stringify(debug, null, 2)}</pre>
          </details>
        )}
      </div>
    );
  }

  // Добавляем обработку состояния загрузки
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Обработка ошибок
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Список существующих статических страниц
  const staticPages = [
    '/web-visual-design',
    '/project-relaunch',
    '/premium-sass-design',
    '/',
    '/website-redesign'
  ];

  // Получаем все возможные пути от PLASMIC
  const pages = await PLASMIC.fetchPages();

  const paths = pages
    .filter(page => !staticPages.includes(page.path)) // Исключаем статические страницы
    .map((page) => ({
      params: {
        catchall: page.path.split('/').filter(Boolean)
      }
    }));

  return {
    paths,
    fallback: 'blocking'
  };
};
