// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: RtBKwP03e9N1

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

import Modal from "../../Modal"; // plasmic-import: i7CIl4afDTa3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicContactUsButton.module.css"; // plasmic-import: RtBKwP03e9N1/css

import Contact24Icon from "./icons/PlasmicIcon__Contact24"; // plasmic-import: 4_F0VNY3gp1U/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: _0LPyGJ07UD3/icon

createPlasmicElementProxy;

export type PlasmicContactUsButton__VariantMembers = {};
export type PlasmicContactUsButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactUsButton__VariantsArgs;
export const PlasmicContactUsButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicContactUsButton__ArgsType = {};
type ArgPropType = keyof PlasmicContactUsButton__ArgsType;
export const PlasmicContactUsButton__ArgProps = new Array<ArgPropType>();

export type PlasmicContactUsButton__OverridesType = {
  button6?: Flex__<"button">;
  iconFrame6?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  label6?: Flex__<"div">;
  arrow245?: Flex__<"div">;
  icon24Grid5?: Flex__<"div">;
  icons24IconGridSquare5?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  modal?: Flex__<typeof Modal>;
};

export interface DefaultContactUsButtonProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactUsButton__RenderFunc(props: {
  variants: PlasmicContactUsButton__VariantsArgs;
  args: PlasmicContactUsButton__ArgsType;
  overrides: PlasmicContactUsButton__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "modal.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isButton6Hover, triggerButton6HoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_button6: isButton6Hover
  };

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"button6"}
      data-plasmic-override={overrides.button6}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.button6
      )}
      onClick={async event => {
        const $steps = {};

        $steps["updateModalIsOpen"] = true
          ? (() => {
              const actionArgs = {
                variable: {
                  objRoot: $state,
                  variablePath: ["modal", "isOpen"]
                },
                operation: 4
              };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;

                const oldValue = $stateGet(objRoot, variablePath);
                $stateSet(objRoot, variablePath, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateModalIsOpen"] != null &&
          typeof $steps["updateModalIsOpen"] === "object" &&
          typeof $steps["updateModalIsOpen"].then === "function"
        ) {
          $steps["updateModalIsOpen"] = await $steps["updateModalIsOpen"];
        }
      }}
      ref={ref => {
        $refs["button6"] = ref;
      }}
      data-plasmic-trigger-props={[triggerButton6HoverProps]}
    >
      <div
        data-plasmic-name={"iconFrame6"}
        data-plasmic-override={overrides.iconFrame6}
        className={classNames(projectcss.all, sty.iconFrame6)}
      >
        <Contact24Icon
          className={classNames(projectcss.all, sty.svg__pWpOe)}
          role={"img"}
        />
      </div>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"label6"}
          data-plasmic-override={overrides.label6}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.label6
          )}
        >
          {"Contact Us"}
        </div>
      </div>
      {false ? (
        <div
          data-plasmic-name={"arrow245"}
          data-plasmic-override={overrides.arrow245}
          className={classNames(projectcss.all, sty.arrow245)}
        >
          {false ? (
            <div
              data-plasmic-name={"icon24Grid5"}
              data-plasmic-override={overrides.icon24Grid5}
              className={classNames(projectcss.all, sty.icon24Grid5)}
            >
              <div
                data-plasmic-name={"icons24IconGridSquare5"}
                data-plasmic-override={overrides.icons24IconGridSquare5}
                className={classNames(
                  projectcss.all,
                  sty.icons24IconGridSquare5
                )}
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
            className={classNames(projectcss.all, sty.svg__drNwv)}
            role={"img"}
          />
        </div>
      ) : null}
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        platform={"nextjs"}
      >
        <Modal
          data-plasmic-name={"modal"}
          data-plasmic-override={overrides.modal}
          className={classNames("__wab_instance", sty.modal)}
          isOpen={generateStateValueProp($state, ["modal", "isOpen"])}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["modal", "isOpen"]).apply(
              null,
              eventArgs
            );

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
        />
      </PlasmicLink__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  button6: [
    "button6",
    "iconFrame6",
    "freeBox",
    "label6",
    "arrow245",
    "icon24Grid5",
    "icons24IconGridSquare5",
    "img",
    "link",
    "modal"
  ],
  iconFrame6: ["iconFrame6"],
  freeBox: ["freeBox", "label6"],
  label6: ["label6"],
  arrow245: ["arrow245", "icon24Grid5", "icons24IconGridSquare5", "img"],
  icon24Grid5: ["icon24Grid5", "icons24IconGridSquare5", "img"],
  icons24IconGridSquare5: ["icons24IconGridSquare5", "img"],
  img: ["img"],
  link: ["link", "modal"],
  modal: ["modal"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  button6: "button";
  iconFrame6: "div";
  freeBox: "div";
  label6: "div";
  arrow245: "div";
  icon24Grid5: "div";
  icons24IconGridSquare5: "div";
  img: typeof PlasmicImg__;
  link: "a";
  modal: typeof Modal;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactUsButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactUsButton__VariantsArgs;
    args?: PlasmicContactUsButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactUsButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContactUsButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContactUsButton__ArgProps,
          internalVariantPropNames: PlasmicContactUsButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUsButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "button6") {
    func.displayName = "PlasmicContactUsButton";
  } else {
    func.displayName = `PlasmicContactUsButton.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUsButton = Object.assign(
  // Top-level PlasmicContactUsButton renders the root element
  makeNodeComponent("button6"),
  {
    // Helper components rendering sub-elements
    iconFrame6: makeNodeComponent("iconFrame6"),
    freeBox: makeNodeComponent("freeBox"),
    label6: makeNodeComponent("label6"),
    arrow245: makeNodeComponent("arrow245"),
    icon24Grid5: makeNodeComponent("icon24Grid5"),
    icons24IconGridSquare5: makeNodeComponent("icons24IconGridSquare5"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    modal: makeNodeComponent("modal"),

    // Metadata about props expected for PlasmicContactUsButton
    internalVariantProps: PlasmicContactUsButton__VariantProps,
    internalArgProps: PlasmicContactUsButton__ArgProps
  }
);

export default PlasmicContactUsButton;
/* prettier-ignore-end */
