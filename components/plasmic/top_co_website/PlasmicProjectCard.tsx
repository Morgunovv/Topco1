// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: yHPLVPHBQMEC

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsknLyTCzNv2Gm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KNLyTCzNV2Gm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicProjectCard.module.css"; // plasmic-import: yHPLVPHBQMEC/css

createPlasmicElementProxy;

export type PlasmicProjectCard__VariantMembers = {};
export type PlasmicProjectCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectCard__VariantsArgs;
export const PlasmicProjectCard__VariantProps = new Array<VariantPropType>();

export type PlasmicProjectCard__ArgsType = {
  link?: string;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  title?: React.ReactNode;
  description?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectCard__ArgsType;
export const PlasmicProjectCard__ArgProps = new Array<ArgPropType>(
  "link",
  "image",
  "title",
  "description"
);

export type PlasmicProjectCard__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
  freeBox?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h3?: Flex__<"h3">;
};

export interface DefaultProjectCardProps {
  link?: string;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjectCard__RenderFunc(props: {
  variants: PlasmicProjectCard__VariantsArgs;
  args: PlasmicProjectCard__ArgsType;
  overrides: PlasmicProjectCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image: {
            src: "/plasmic/top_co_website/images/wallpaperJpg.jpg",
            fullWidth: 1921,
            fullHeight: 1081,
            aspectRatio: undefined
          }
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsknLyTCzNv2Gm()
  });

  return (
    <Stack__
      as={PlasmicLink__}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={args.link}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "250px"
              : "400px"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "100%" : "auto"
          }
          loading={"lazy"}
          src={args.image}
        />
      </div>
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(projectcss.all, projectcss.h3, sty.h3)}
      >
        {renderPlasmicSlot({
          defaultContents: "Project Relaunch",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      </h3>
      {renderPlasmicSlot({
        defaultContents:
          "Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.",
        value: args.description,
        className: classNames(sty.slotTargetDescription)
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "h3"],
  freeBox: ["freeBox", "img"],
  img: ["img"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
  img: typeof PlasmicImg__;
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectCard__VariantsArgs;
    args?: PlasmicProjectCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectCard__ArgProps,
          internalVariantPropNames: PlasmicProjectCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectCard";
  } else {
    func.displayName = `PlasmicProjectCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectCard = Object.assign(
  // Top-level PlasmicProjectCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicProjectCard
    internalVariantProps: PlasmicProjectCard__VariantProps,
    internalArgProps: PlasmicProjectCard__ArgProps
  }
);

export default PlasmicProjectCard;
/* prettier-ignore-end */
