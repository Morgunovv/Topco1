// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: X6nv7zY2utC2

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
import sty from "./PlasmicGoToWallet.module.css"; // plasmic-import: X6nv7zY2utC2/css

import Contact24Icon from "./icons/PlasmicIcon__Contact24"; // plasmic-import: 4_F0VNY3gp1U/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: _0LPyGJ07UD3/icon

createPlasmicElementProxy;

export type PlasmicGoToWallet__VariantMembers = {};
export type PlasmicGoToWallet__VariantsArgs = {};
type VariantPropType = keyof PlasmicGoToWallet__VariantsArgs;
export const PlasmicGoToWallet__VariantProps = new Array<VariantPropType>();

export type PlasmicGoToWallet__ArgsType = {};
type ArgPropType = keyof PlasmicGoToWallet__ArgsType;
export const PlasmicGoToWallet__ArgProps = new Array<ArgPropType>();

export type PlasmicGoToWallet__OverridesType = {
  button8?: Flex__<"div">;
  iconFrame8?: Flex__<"div">;
  label8?: Flex__<"div">;
  arrow247?: Flex__<"div">;
  icon24Grid7?: Flex__<"div">;
  icons24IconGridSquare7?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultGoToWalletProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGoToWallet__RenderFunc(props: {
  variants: PlasmicGoToWallet__VariantsArgs;
  args: PlasmicGoToWallet__ArgsType;
  overrides: PlasmicGoToWallet__OverridesType;
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
      data-plasmic-name={"button8"}
      data-plasmic-override={overrides.button8}
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
        sty.button8
      )}
    >
      {false ? (
        <div
          data-plasmic-name={"iconFrame8"}
          data-plasmic-override={overrides.iconFrame8}
          className={classNames(projectcss.all, sty.iconFrame8)}
        >
          <Contact24Icon
            className={classNames(projectcss.all, sty.svg__frer8)}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"label8"}
        data-plasmic-override={overrides.label8}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.label8
        )}
      >
        {"Go to Wallet"}
      </div>
      <div
        data-plasmic-name={"arrow247"}
        data-plasmic-override={overrides.arrow247}
        className={classNames(projectcss.all, sty.arrow247)}
      >
        {false ? (
          <div
            data-plasmic-name={"icon24Grid7"}
            data-plasmic-override={overrides.icon24Grid7}
            className={classNames(projectcss.all, sty.icon24Grid7)}
          >
            <div
              data-plasmic-name={"icons24IconGridSquare7"}
              data-plasmic-override={overrides.icons24IconGridSquare7}
              className={classNames(projectcss.all, sty.icons24IconGridSquare7)}
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
          className={classNames(projectcss.all, sty.svg__rxO7U)}
          role={"img"}
        />
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  button8: [
    "button8",
    "iconFrame8",
    "label8",
    "arrow247",
    "icon24Grid7",
    "icons24IconGridSquare7",
    "img"
  ],
  iconFrame8: ["iconFrame8"],
  label8: ["label8"],
  arrow247: ["arrow247", "icon24Grid7", "icons24IconGridSquare7", "img"],
  icon24Grid7: ["icon24Grid7", "icons24IconGridSquare7", "img"],
  icons24IconGridSquare7: ["icons24IconGridSquare7", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  button8: "div";
  iconFrame8: "div";
  label8: "div";
  arrow247: "div";
  icon24Grid7: "div";
  icons24IconGridSquare7: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGoToWallet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGoToWallet__VariantsArgs;
    args?: PlasmicGoToWallet__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGoToWallet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGoToWallet__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGoToWallet__ArgProps,
          internalVariantPropNames: PlasmicGoToWallet__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGoToWallet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "button8") {
    func.displayName = "PlasmicGoToWallet";
  } else {
    func.displayName = `PlasmicGoToWallet.${nodeName}`;
  }
  return func;
}

export const PlasmicGoToWallet = Object.assign(
  // Top-level PlasmicGoToWallet renders the root element
  makeNodeComponent("button8"),
  {
    // Helper components rendering sub-elements
    iconFrame8: makeNodeComponent("iconFrame8"),
    label8: makeNodeComponent("label8"),
    arrow247: makeNodeComponent("arrow247"),
    icon24Grid7: makeNodeComponent("icon24Grid7"),
    icons24IconGridSquare7: makeNodeComponent("icons24IconGridSquare7"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicGoToWallet
    internalVariantProps: PlasmicGoToWallet__VariantProps,
    internalArgProps: PlasmicGoToWallet__ArgProps
  }
);

export default PlasmicGoToWallet;
/* prettier-ignore-end */
