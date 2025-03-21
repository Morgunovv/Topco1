// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: WBvPpAwJOmoD

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
import sty from "./PlasmicReadMore.module.css"; // plasmic-import: WBvPpAwJOmoD/css

import Contact24Icon from "./icons/PlasmicIcon__Contact24"; // plasmic-import: 4_F0VNY3gp1U/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: _0LPyGJ07UD3/icon

createPlasmicElementProxy;

export type PlasmicReadMore__VariantMembers = {};
export type PlasmicReadMore__VariantsArgs = {};
type VariantPropType = keyof PlasmicReadMore__VariantsArgs;
export const PlasmicReadMore__VariantProps = new Array<VariantPropType>();

export type PlasmicReadMore__ArgsType = {};
type ArgPropType = keyof PlasmicReadMore__ArgsType;
export const PlasmicReadMore__ArgProps = new Array<ArgPropType>();

export type PlasmicReadMore__OverridesType = {
  button7?: Flex__<"div">;
  iconFrame7?: Flex__<"div">;
  label7?: Flex__<"div">;
  arrow246?: Flex__<"div">;
  icon24Grid6?: Flex__<"div">;
  icons24IconGridSquare6?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultReadMoreProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReadMore__RenderFunc(props: {
  variants: PlasmicReadMore__VariantsArgs;
  args: PlasmicReadMore__ArgsType;
  overrides: PlasmicReadMore__OverridesType;
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
      data-plasmic-name={"button7"}
      data-plasmic-override={overrides.button7}
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
        sty.button7
      )}
    >
      {false ? (
        <div
          data-plasmic-name={"iconFrame7"}
          data-plasmic-override={overrides.iconFrame7}
          className={classNames(projectcss.all, sty.iconFrame7)}
        >
          <Contact24Icon
            className={classNames(projectcss.all, sty.svg__gBqul)}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"label7"}
        data-plasmic-override={overrides.label7}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.label7
        )}
      >
        {"Read More"}
      </div>
      <div
        data-plasmic-name={"arrow246"}
        data-plasmic-override={overrides.arrow246}
        className={classNames(projectcss.all, sty.arrow246)}
      >
        {false ? (
          <div
            data-plasmic-name={"icon24Grid6"}
            data-plasmic-override={overrides.icon24Grid6}
            className={classNames(projectcss.all, sty.icon24Grid6)}
          >
            <div
              data-plasmic-name={"icons24IconGridSquare6"}
              data-plasmic-override={overrides.icons24IconGridSquare6}
              className={classNames(projectcss.all, sty.icons24IconGridSquare6)}
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
          className={classNames(projectcss.all, sty.svg__esto)}
          role={"img"}
        />
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  button7: [
    "button7",
    "iconFrame7",
    "label7",
    "arrow246",
    "icon24Grid6",
    "icons24IconGridSquare6",
    "img"
  ],
  iconFrame7: ["iconFrame7"],
  label7: ["label7"],
  arrow246: ["arrow246", "icon24Grid6", "icons24IconGridSquare6", "img"],
  icon24Grid6: ["icon24Grid6", "icons24IconGridSquare6", "img"],
  icons24IconGridSquare6: ["icons24IconGridSquare6", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  button7: "div";
  iconFrame7: "div";
  label7: "div";
  arrow246: "div";
  icon24Grid6: "div";
  icons24IconGridSquare6: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReadMore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReadMore__VariantsArgs;
    args?: PlasmicReadMore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReadMore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicReadMore__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicReadMore__ArgProps,
          internalVariantPropNames: PlasmicReadMore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReadMore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "button7") {
    func.displayName = "PlasmicReadMore";
  } else {
    func.displayName = `PlasmicReadMore.${nodeName}`;
  }
  return func;
}

export const PlasmicReadMore = Object.assign(
  // Top-level PlasmicReadMore renders the root element
  makeNodeComponent("button7"),
  {
    // Helper components rendering sub-elements
    iconFrame7: makeNodeComponent("iconFrame7"),
    label7: makeNodeComponent("label7"),
    arrow246: makeNodeComponent("arrow246"),
    icon24Grid6: makeNodeComponent("icon24Grid6"),
    icons24IconGridSquare6: makeNodeComponent("icons24IconGridSquare6"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicReadMore
    internalVariantProps: PlasmicReadMore__VariantProps,
    internalArgProps: PlasmicReadMore__ArgProps
  }
);

export default PlasmicReadMore;
/* prettier-ignore-end */
