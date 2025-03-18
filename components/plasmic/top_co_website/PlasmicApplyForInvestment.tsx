// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: Daot0e6yLXbN

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicApplyForInvestment.module.css"; // plasmic-import: Daot0e6yLXbN/css

import Contact24Icon from "./icons/PlasmicIcon__Contact24"; // plasmic-import: 4_F0VNY3gp1U/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: _0LPyGJ07UD3/icon

createPlasmicElementProxy;

export type PlasmicApplyForInvestment__VariantMembers = {};
export type PlasmicApplyForInvestment__VariantsArgs = {};
type VariantPropType = keyof PlasmicApplyForInvestment__VariantsArgs;
export const PlasmicApplyForInvestment__VariantProps =
  new Array<VariantPropType>();

export type PlasmicApplyForInvestment__ArgsType = {};
type ArgPropType = keyof PlasmicApplyForInvestment__ArgsType;
export const PlasmicApplyForInvestment__ArgProps = new Array<ArgPropType>();

export type PlasmicApplyForInvestment__OverridesType = {
  button9?: Flex__<"div">;
  iconFrame9?: Flex__<"div">;
  label9?: Flex__<"div">;
  arrow248?: Flex__<"div">;
  icon24Grid8?: Flex__<"div">;
  icons24IconGridSquare8?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultApplyForInvestmentProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicApplyForInvestment__RenderFunc(props: {
  variants: PlasmicApplyForInvestment__VariantsArgs;
  args: PlasmicApplyForInvestment__ArgsType;
  overrides: PlasmicApplyForInvestment__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"button9"}
      data-plasmic-override={overrides.button9}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.button9
      )}
    >
      {false ? (
        <div
          data-plasmic-name={"iconFrame9"}
          data-plasmic-override={overrides.iconFrame9}
          className={classNames(projectcss.all, sty.iconFrame9)}
        >
          <Contact24Icon
            className={classNames(projectcss.all, sty.svg__jq7Hv)}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"label9"}
        data-plasmic-override={overrides.label9}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.label9
        )}
      >
        {"Apply for Investment"}
      </div>
      <div
        data-plasmic-name={"arrow248"}
        data-plasmic-override={overrides.arrow248}
        className={classNames(projectcss.all, sty.arrow248)}
      >
        {false ? (
          <div
            data-plasmic-name={"icon24Grid8"}
            data-plasmic-override={overrides.icon24Grid8}
            className={classNames(projectcss.all, sty.icon24Grid8)}
          >
            <div
              data-plasmic-name={"icons24IconGridSquare8"}
              data-plasmic-override={overrides.icons24IconGridSquare8}
              className={classNames(projectcss.all, sty.icons24IconGridSquare8)}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"20.571428298950195px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"20.571428298950195px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/top_co_website/images/square.svg",
                  fullWidth: 20.571428298950195,
                  fullHeight: 20.571428298950195,
                  aspectRatio: 1
                }}
              />
            </div>
          </div>
        ) : null}
        <Icon2Icon
          className={classNames(projectcss.all, sty.svg__eHuoi)}
          role={"img"}
        />
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  button9: [
    "button9",
    "iconFrame9",
    "label9",
    "arrow248",
    "icon24Grid8",
    "icons24IconGridSquare8",
    "img"
  ],
  iconFrame9: ["iconFrame9"],
  label9: ["label9"],
  arrow248: ["arrow248", "icon24Grid8", "icons24IconGridSquare8", "img"],
  icon24Grid8: ["icon24Grid8", "icons24IconGridSquare8", "img"],
  icons24IconGridSquare8: ["icons24IconGridSquare8", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  button9: "div";
  iconFrame9: "div";
  label9: "div";
  arrow248: "div";
  icon24Grid8: "div";
  icons24IconGridSquare8: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicApplyForInvestment__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicApplyForInvestment__VariantsArgs;
    args?: PlasmicApplyForInvestment__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicApplyForInvestment__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicApplyForInvestment__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicApplyForInvestment__ArgProps,
          internalVariantPropNames: PlasmicApplyForInvestment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicApplyForInvestment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "button9") {
    func.displayName = "PlasmicApplyForInvestment";
  } else {
    func.displayName = `PlasmicApplyForInvestment.${nodeName}`;
  }
  return func;
}

export const PlasmicApplyForInvestment = Object.assign(
  // Top-level PlasmicApplyForInvestment renders the root element
  makeNodeComponent("button9"),
  {
    // Helper components rendering sub-elements
    iconFrame9: makeNodeComponent("iconFrame9"),
    label9: makeNodeComponent("label9"),
    arrow248: makeNodeComponent("arrow248"),
    icon24Grid8: makeNodeComponent("icon24Grid8"),
    icons24IconGridSquare8: makeNodeComponent("icons24IconGridSquare8"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicApplyForInvestment
    internalVariantProps: PlasmicApplyForInvestment__VariantProps,
    internalArgProps: PlasmicApplyForInvestment__ArgProps
  }
);

export default PlasmicApplyForInvestment;
/* prettier-ignore-end */
