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

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, unknown>;
}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();

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

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
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
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache }, revalidate: 60 };
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
