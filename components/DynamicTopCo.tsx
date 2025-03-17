import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "./plasmic/top_co_website/PlasmicGlobalContextsProvider";
import { useRouter } from "next/router";
import { PlasmicTopCo } from "./plasmic/top_co_website/PlasmicTopCo";

export default function DynamicTopCo() {
    return (
        <GlobalContextsProvider>
            <PageParamsProvider__
                route={useRouter()?.pathname}
                params={useRouter()?.query}
                query={useRouter()?.query}
            >
                <PlasmicTopCo />
            </PageParamsProvider__>
        </GlobalContextsProvider>
    );
} 