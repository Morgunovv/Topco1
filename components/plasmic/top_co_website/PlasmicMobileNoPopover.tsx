// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: QXHjqVLLZCx6

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
import sty from "./PlasmicMobileNoPopover.module.css"; // plasmic-import: QXHjqVLLZCx6/css

import Contact24Icon from "./icons/PlasmicIcon__Contact24"; // plasmic-import: 4_F0VNY3gp1U/icon
import Frame2131327153Icon from "./icons/PlasmicIcon__Frame2131327153"; // plasmic-import: i9h3lVHw5uRy/icon
import Cross20Icon from "./icons/PlasmicIcon__Cross20"; // plasmic-import: 28c3JiKFdBbF/icon

createPlasmicElementProxy;

export type PlasmicMobileNoPopover__VariantMembers = {};
export type PlasmicMobileNoPopover__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobileNoPopover__VariantsArgs;
export const PlasmicMobileNoPopover__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMobileNoPopover__ArgsType = {};
type ArgPropType = keyof PlasmicMobileNoPopover__ArgsType;
export const PlasmicMobileNoPopover__ArgProps = new Array<ArgPropType>();

export type PlasmicMobileNoPopover__OverridesType = {
  button?: Flex__<"div">;
  iconFrame?: Flex__<"div">;
  frame2131327275?: Flex__<"div">;
  contextMenus?: Flex__<"div">;
  header?: Flex__<"div">;
  controls?: Flex__<"div">;
  icon?: Flex__<"div">;
  icon2?: Flex__<"div">;
  controls2?: Flex__<"div">;
  icon3?: Flex__<"div">;
  icon4?: Flex__<"div">;
  controls3?: Flex__<"div">;
  icon5?: Flex__<"div">;
  icon6?: Flex__<"div">;
  frame2131327277?: Flex__<"div">;
  contextMenus3?: Flex__<"div">;
  header3?: Flex__<"div">;
  controls7?: Flex__<"div">;
  icon13?: Flex__<"div">;
  icon14?: Flex__<"div">;
  controls8?: Flex__<"div">;
  icon15?: Flex__<"div">;
  icon16?: Flex__<"div">;
  controls9?: Flex__<"div">;
  icon17?: Flex__<"div">;
  icon18?: Flex__<"div">;
  menuButton?: Flex__<"div">;
  frame2131327145?: Flex__<"div">;
  frame2131327146?: Flex__<"div">;
};

export interface DefaultMobileNoPopoverProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMobileNoPopover__RenderFunc(props: {
  variants: PlasmicMobileNoPopover__VariantsArgs;
  args: PlasmicMobileNoPopover__ArgsType;
  overrides: PlasmicMobileNoPopover__OverridesType;
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
      as={"div"}
      data-plasmic-name={"button"}
      data-plasmic-override={overrides.button}
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
        sty.button
      )}
    >
      {false ? (
        <div
          data-plasmic-name={"iconFrame"}
          data-plasmic-override={overrides.iconFrame}
          className={classNames(projectcss.all, sty.iconFrame)}
        >
          <Contact24Icon
            className={classNames(projectcss.all, sty.svg__rzJfE)}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"frame2131327275"}
        data-plasmic-override={overrides.frame2131327275}
        className={classNames(projectcss.all, sty.frame2131327275)}
      >
        <div
          data-plasmic-name={"contextMenus"}
          data-plasmic-override={overrides.contextMenus}
          className={classNames(projectcss.all, sty.contextMenus)}
        >
          {false ? (
            <div
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(projectcss.all, sty.header)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__csknh
                )}
              >
                {"Header"}
              </div>
            </div>
          ) : null}
          <Stack__
            as={"div"}
            data-plasmic-name={"controls"}
            data-plasmic-override={overrides.controls}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4BzPu
              )}
            >
              {"Builders Toolkit"}
            </div>
            <div
              data-plasmic-name={"icon"}
              data-plasmic-override={overrides.icon}
              className={classNames(projectcss.all, sty.icon)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon2"}
                  data-plasmic-override={overrides.icon2}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon2
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"controls2"}
            data-plasmic-override={overrides.controls2}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1Z3Cr
              )}
            >
              {"Companies"}
            </div>
            <div
              data-plasmic-name={"icon3"}
              data-plasmic-override={overrides.icon3}
              className={classNames(projectcss.all, sty.icon3)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon4"}
                  data-plasmic-override={overrides.icon4}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon4
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"controls3"}
            data-plasmic-override={overrides.controls3}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls3)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7X0Ei
              )}
            >
              {"Portfolio"}
            </div>
            <div
              data-plasmic-name={"icon5"}
              data-plasmic-override={overrides.icon5}
              className={classNames(projectcss.all, sty.icon5)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon6"}
                  data-plasmic-override={overrides.icon6}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon6
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
        </div>
      </div>
      <div
        data-plasmic-name={"frame2131327277"}
        data-plasmic-override={overrides.frame2131327277}
        className={classNames(projectcss.all, sty.frame2131327277)}
      >
        <div
          data-plasmic-name={"contextMenus3"}
          data-plasmic-override={overrides.contextMenus3}
          className={classNames(projectcss.all, sty.contextMenus3)}
        >
          {false ? (
            <div
              data-plasmic-name={"header3"}
              data-plasmic-override={overrides.header3}
              className={classNames(projectcss.all, sty.header3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oqA
                )}
              >
                {"Header"}
              </div>
            </div>
          ) : null}
          <Stack__
            as={"div"}
            data-plasmic-name={"controls7"}
            data-plasmic-override={overrides.controls7}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls7)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1Bft4
              )}
            >
              {"Builders Toolkit"}
            </div>
            <div
              data-plasmic-name={"icon13"}
              data-plasmic-override={overrides.icon13}
              className={classNames(projectcss.all, sty.icon13)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon14"}
                  data-plasmic-override={overrides.icon14}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon14
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"controls8"}
            data-plasmic-override={overrides.controls8}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls8)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bbKwF
              )}
            >
              {"Companies"}
            </div>
            <div
              data-plasmic-name={"icon15"}
              data-plasmic-override={overrides.icon15}
              className={classNames(projectcss.all, sty.icon15)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon16"}
                  data-plasmic-override={overrides.icon16}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon16
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"controls9"}
            data-plasmic-override={overrides.controls9}
            hasGap={true}
            className={classNames(projectcss.all, sty.controls9)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3DFl
              )}
            >
              {"Portfolio"}
            </div>
            <div
              data-plasmic-name={"icon17"}
              data-plasmic-override={overrides.icon17}
              className={classNames(projectcss.all, sty.icon17)}
            >
              {false ? (
                <div
                  data-plasmic-name={"icon18"}
                  data-plasmic-override={overrides.icon18}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.icon18
                  )}
                >
                  {"\udbc3\udfeb"}
                </div>
              ) : null}
            </div>
          </Stack__>
        </div>
      </div>
      <div
        data-plasmic-name={"menuButton"}
        data-plasmic-override={overrides.menuButton}
        className={classNames(projectcss.all, sty.menuButton)}
      >
        <div
          data-plasmic-name={"frame2131327145"}
          data-plasmic-override={overrides.frame2131327145}
          className={classNames(projectcss.all, sty.frame2131327145)}
        >
          <Stack__
            as={Frame2131327153Icon}
            hasGap={true}
            className={classNames(projectcss.all, sty.svg__pv27E)}
            role={"img"}
          />

          <div
            data-plasmic-name={"frame2131327146"}
            data-plasmic-override={overrides.frame2131327146}
            className={classNames(projectcss.all, sty.frame2131327146)}
          >
            <Stack__
              as={Frame2131327153Icon}
              hasGap={true}
              className={classNames(projectcss.all, sty.svg__qMhJ)}
              role={"img"}
            />

            {false ? (
              <Cross20Icon
                className={classNames(projectcss.all, sty.svg___51Xmh)}
                role={"img"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  button: [
    "button",
    "iconFrame",
    "frame2131327275",
    "contextMenus",
    "header",
    "controls",
    "icon",
    "icon2",
    "controls2",
    "icon3",
    "icon4",
    "controls3",
    "icon5",
    "icon6",
    "frame2131327277",
    "contextMenus3",
    "header3",
    "controls7",
    "icon13",
    "icon14",
    "controls8",
    "icon15",
    "icon16",
    "controls9",
    "icon17",
    "icon18",
    "menuButton",
    "frame2131327145",
    "frame2131327146"
  ],
  iconFrame: ["iconFrame"],
  frame2131327275: [
    "frame2131327275",
    "contextMenus",
    "header",
    "controls",
    "icon",
    "icon2",
    "controls2",
    "icon3",
    "icon4",
    "controls3",
    "icon5",
    "icon6"
  ],
  contextMenus: [
    "contextMenus",
    "header",
    "controls",
    "icon",
    "icon2",
    "controls2",
    "icon3",
    "icon4",
    "controls3",
    "icon5",
    "icon6"
  ],
  header: ["header"],
  controls: ["controls", "icon", "icon2"],
  icon: ["icon", "icon2"],
  icon2: ["icon2"],
  controls2: ["controls2", "icon3", "icon4"],
  icon3: ["icon3", "icon4"],
  icon4: ["icon4"],
  controls3: ["controls3", "icon5", "icon6"],
  icon5: ["icon5", "icon6"],
  icon6: ["icon6"],
  frame2131327277: [
    "frame2131327277",
    "contextMenus3",
    "header3",
    "controls7",
    "icon13",
    "icon14",
    "controls8",
    "icon15",
    "icon16",
    "controls9",
    "icon17",
    "icon18"
  ],
  contextMenus3: [
    "contextMenus3",
    "header3",
    "controls7",
    "icon13",
    "icon14",
    "controls8",
    "icon15",
    "icon16",
    "controls9",
    "icon17",
    "icon18"
  ],
  header3: ["header3"],
  controls7: ["controls7", "icon13", "icon14"],
  icon13: ["icon13", "icon14"],
  icon14: ["icon14"],
  controls8: ["controls8", "icon15", "icon16"],
  icon15: ["icon15", "icon16"],
  icon16: ["icon16"],
  controls9: ["controls9", "icon17", "icon18"],
  icon17: ["icon17", "icon18"],
  icon18: ["icon18"],
  menuButton: ["menuButton", "frame2131327145", "frame2131327146"],
  frame2131327145: ["frame2131327145", "frame2131327146"],
  frame2131327146: ["frame2131327146"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  button: "div";
  iconFrame: "div";
  frame2131327275: "div";
  contextMenus: "div";
  header: "div";
  controls: "div";
  icon: "div";
  icon2: "div";
  controls2: "div";
  icon3: "div";
  icon4: "div";
  controls3: "div";
  icon5: "div";
  icon6: "div";
  frame2131327277: "div";
  contextMenus3: "div";
  header3: "div";
  controls7: "div";
  icon13: "div";
  icon14: "div";
  controls8: "div";
  icon15: "div";
  icon16: "div";
  controls9: "div";
  icon17: "div";
  icon18: "div";
  menuButton: "div";
  frame2131327145: "div";
  frame2131327146: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobileNoPopover__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobileNoPopover__VariantsArgs;
    args?: PlasmicMobileNoPopover__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMobileNoPopover__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMobileNoPopover__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMobileNoPopover__ArgProps,
          internalVariantPropNames: PlasmicMobileNoPopover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMobileNoPopover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "button") {
    func.displayName = "PlasmicMobileNoPopover";
  } else {
    func.displayName = `PlasmicMobileNoPopover.${nodeName}`;
  }
  return func;
}

export const PlasmicMobileNoPopover = Object.assign(
  // Top-level PlasmicMobileNoPopover renders the root element
  makeNodeComponent("button"),
  {
    // Helper components rendering sub-elements
    iconFrame: makeNodeComponent("iconFrame"),
    frame2131327275: makeNodeComponent("frame2131327275"),
    contextMenus: makeNodeComponent("contextMenus"),
    header: makeNodeComponent("header"),
    controls: makeNodeComponent("controls"),
    icon: makeNodeComponent("icon"),
    icon2: makeNodeComponent("icon2"),
    controls2: makeNodeComponent("controls2"),
    icon3: makeNodeComponent("icon3"),
    icon4: makeNodeComponent("icon4"),
    controls3: makeNodeComponent("controls3"),
    icon5: makeNodeComponent("icon5"),
    icon6: makeNodeComponent("icon6"),
    frame2131327277: makeNodeComponent("frame2131327277"),
    contextMenus3: makeNodeComponent("contextMenus3"),
    header3: makeNodeComponent("header3"),
    controls7: makeNodeComponent("controls7"),
    icon13: makeNodeComponent("icon13"),
    icon14: makeNodeComponent("icon14"),
    controls8: makeNodeComponent("controls8"),
    icon15: makeNodeComponent("icon15"),
    icon16: makeNodeComponent("icon16"),
    controls9: makeNodeComponent("controls9"),
    icon17: makeNodeComponent("icon17"),
    icon18: makeNodeComponent("icon18"),
    menuButton: makeNodeComponent("menuButton"),
    frame2131327145: makeNodeComponent("frame2131327145"),
    frame2131327146: makeNodeComponent("frame2131327146"),

    // Metadata about props expected for PlasmicMobileNoPopover
    internalVariantProps: PlasmicMobileNoPopover__VariantProps,
    internalArgProps: PlasmicMobileNoPopover__ArgProps
  }
);

export default PlasmicMobileNoPopover;
/* prettier-ignore-end */
