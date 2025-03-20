// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: 9v61rVfqoMFe

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

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicProjectHeader.module.css"; // plasmic-import: 9v61rVfqoMFe/css

createPlasmicElementProxy;

export type PlasmicProjectHeader__VariantMembers = {};
export type PlasmicProjectHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectHeader__VariantsArgs;
export const PlasmicProjectHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicProjectHeader__ArgsType = {
  title?: React.ReactNode;
  role?: React.ReactNode;
  timeline?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectHeader__ArgsType;
export const PlasmicProjectHeader__ArgProps = new Array<ArgPropType>(
  "title",
  "role",
  "timeline"
);

export type PlasmicProjectHeader__OverridesType = {
  root?: Flex__<"section">;
  h1?: Flex__<"h1">;
};

export interface DefaultProjectHeaderProps {
  title?: React.ReactNode;
  role?: React.ReactNode;
  timeline?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjectHeader__RenderFunc(props: {
  variants: PlasmicProjectHeader__VariantsArgs;
  args: PlasmicProjectHeader__ArgsType;
  overrides: PlasmicProjectHeader__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsknLyTCzNv2Gm()
  });

  return (
    <Stack__
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.columns__nsTCi)}>
        <div className={classNames(projectcss.all, sty.column__ydrLa)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___30QkH
            )}
          >
            {"BRANDING"}
          </div>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(projectcss.all, projectcss.h1, sty.h1)}
          >
            {renderPlasmicSlot({
              defaultContents: "Premium SaaS Design",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </h1>
        </div>
        <div className={classNames(projectcss.all, sty.column__s0Sf1)}>
          <div className={classNames(projectcss.all, sty.columns__ucTMb)}>
            <div className={classNames(projectcss.all, sty.column__ye4Zz)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gsBnE
                )}
              >
                {"ROLE"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__aGh5D)}>
                {renderPlasmicSlot({
                  defaultContents: "UI/UX Designer",
                  value: args.role,
                  className: classNames(sty.slotTargetRole)
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column__t3Ix)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xN54
                )}
              >
                {"TIMELINE"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__tjTRc)}>
                {renderPlasmicSlot({
                  defaultContents: "Sep - Dec 2023",
                  value: args.timeline,
                  className: classNames(sty.slotTargetTimeline)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectHeader__VariantsArgs;
    args?: PlasmicProjectHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProjectHeader__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProjectHeader__ArgProps,
          internalVariantPropNames: PlasmicProjectHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectHeader";
  } else {
    func.displayName = `PlasmicProjectHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectHeader = Object.assign(
  // Top-level PlasmicProjectHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicProjectHeader
    internalVariantProps: PlasmicProjectHeader__VariantProps,
    internalArgProps: PlasmicProjectHeader__ArgProps
  }
);

export default PlasmicProjectHeader;
/* prettier-ignore-end */
