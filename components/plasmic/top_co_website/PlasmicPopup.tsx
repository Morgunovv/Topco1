// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: apyUXb51frmk

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

import SubmitButton from "../../SubmitButton"; // plasmic-import: LurICPq3ksiD/component
import Combobox from "../../Combobox"; // plasmic-import: RmoZ-FB3YaYT/component
import MenuItem from "../../MenuItem"; // plasmic-import: T2u9UxC3Owqa/component
import TextInput from "../../TextInput"; // plasmic-import: XhUZaLCwsrvr/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicPopup.module.css"; // plasmic-import: apyUXb51frmk/css

import Cross20Icon from "./icons/PlasmicIcon__Cross20"; // plasmic-import: 28c3JiKFdBbF/icon
import RequiredSvgIcon from "./icons/PlasmicIcon__RequiredSvg"; // plasmic-import: TsC0_8x1KEMX/icon

createPlasmicElementProxy;

export type PlasmicPopup__VariantMembers = {};
export type PlasmicPopup__VariantsArgs = {};
type VariantPropType = keyof PlasmicPopup__VariantsArgs;
export const PlasmicPopup__VariantProps = new Array<VariantPropType>();

export type PlasmicPopup__ArgsType = {};
type ArgPropType = keyof PlasmicPopup__ArgsType;
export const PlasmicPopup__ArgProps = new Array<ArgPropType>();

export type PlasmicPopup__OverridesType = {
  root?: Flex__<"div">;
  popUp?: Flex__<"div">;
  titleSubtitle?: Flex__<"div">;
  title2?: Flex__<"div">;
  submitButton?: Flex__<typeof SubmitButton>;
  button2?: Flex__<"button">;
  freeBox?: Flex__<"div">;
  content?: Flex__<"div">;
  combobox?: Flex__<typeof Combobox>;
  generalInquiry?: Flex__<typeof MenuItem>;
  support?: Flex__<typeof MenuItem>;
  feedback?: Flex__<typeof MenuItem>;
  name?: Flex__<typeof TextInput>;
  email?: Flex__<typeof TextInput>;
  message?: Flex__<typeof TextInput>;
};

export interface DefaultPopupProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPopup__RenderFunc(props: {
  variants: PlasmicPopup__VariantsArgs;
  args: PlasmicPopup__ArgsType;
  overrides: PlasmicPopup__OverridesType;
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
        path: "combobox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "email.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "name.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "message.value",
        type: "private",
        variableType: "text",
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
      <Stack__
        as={"div"}
        data-plasmic-name={"popUp"}
        data-plasmic-override={overrides.popUp}
        hasGap={true}
        className={classNames(projectcss.all, sty.popUp)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"titleSubtitle"}
          data-plasmic-override={overrides.titleSubtitle}
          hasGap={true}
          className={classNames(projectcss.all, sty.titleSubtitle)}
        >
          <div
            data-plasmic-name={"title2"}
            data-plasmic-override={overrides.title2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.title2
            )}
          >
            {"Contact Us"}
          </div>
        </Stack__>
        <SubmitButton
          data-plasmic-name={"submitButton"}
          data-plasmic-override={overrides.submitButton}
          className={classNames("__wab_instance", sty.submitButton)}
        />

        <button
          data-plasmic-name={"button2"}
          data-plasmic-override={overrides.button2}
          className={classNames(projectcss.all, projectcss.button, sty.button2)}
          ref={ref => {
            $refs["button2"] = ref;
          }}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Cross20Icon
              className={classNames(projectcss.all, sty.svg__bChss)}
              role={"img"}
            />
          </div>
        </button>
        <Stack__
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fyJ0S
            )}
          >
            {"Your Name"}
          </div>
          <RequiredSvgIcon
            className={classNames(projectcss.all, sty.svg__nZHm)}
            role={"img"}
          />

          <Combobox
            data-plasmic-name={"combobox"}
            data-plasmic-override={overrides.combobox}
            autoFocus={true}
            className={classNames("__wab_instance", sty.combobox)}
            items={
              <React.Fragment>
                <MenuItem
                  data-plasmic-name={"generalInquiry"}
                  data-plasmic-override={overrides.generalInquiry}
                  label={"General inquiry"}
                  value={"General inquiry"}
                />

                <MenuItem
                  data-plasmic-name={"support"}
                  data-plasmic-override={overrides.support}
                  label={"Support"}
                  value={"Support"}
                />

                <MenuItem
                  data-plasmic-name={"feedback"}
                  data-plasmic-override={overrides.feedback}
                  label={"Feedback"}
                  value={"Feedback"}
                />
              </React.Fragment>
            }
            label={
              <React.Fragment>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1KLrq
                  )}
                >
                  {"What is the nature of your inquiry?"}
                </div>
                <RequiredSvgIcon
                  className={classNames(projectcss.all, sty.svg__vNngF)}
                  role={"img"}
                />
              </React.Fragment>
            }
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["combobox", "value"]).apply(
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
            placeholder={"Select one option"}
            type={"plain"}
          />

          <TextInput
            data-plasmic-name={"name"}
            data-plasmic-override={overrides.name}
            ariaLabel={"Name"}
            autoComplete={["name", "family-name"]}
            className={classNames("__wab_instance", sty.name)}
            defaultValue={``}
            inputMode={"text"}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["name", "value"]).apply(
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
            placeholder={"Alex Smith"}
            type={"plain"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sdRfb
            )}
          >
            {"E-mail"}
          </div>
          <RequiredSvgIcon
            className={classNames(projectcss.all, sty.svg__pUcLu)}
            role={"img"}
          />

          <TextInput
            data-plasmic-name={"email"}
            data-plasmic-override={overrides.email}
            ariaLabel={"E-mail"}
            autoComplete={["email"]}
            className={classNames("__wab_instance", sty.email)}
            defaultValue={``}
            inputMode={"text"}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["email", "value"]).apply(
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
            placeholder={"contact@top.co"}
            type={"plain"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___3MKrT
            )}
          >
            {"Your Message"}
          </div>
          <RequiredSvgIcon
            className={classNames(projectcss.all, sty.svg__uXt1X)}
            role={"img"}
          />

          <TextInput
            data-plasmic-name={"message"}
            data-plasmic-override={overrides.message}
            ariaLabel={"Your Name"}
            autoComplete={["name", "family-name"]}
            className={classNames("__wab_instance", sty.message)}
            defaultValue={``}
            flat={[]}
            inputMode={"text"}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["message", "value"]).apply(
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
            placeholder={"Any text..."}
            type={"plain"}
          />
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "popUp",
    "titleSubtitle",
    "title2",
    "submitButton",
    "button2",
    "freeBox",
    "content",
    "combobox",
    "generalInquiry",
    "support",
    "feedback",
    "name",
    "email",
    "message"
  ],
  popUp: [
    "popUp",
    "titleSubtitle",
    "title2",
    "submitButton",
    "button2",
    "freeBox",
    "content",
    "combobox",
    "generalInquiry",
    "support",
    "feedback",
    "name",
    "email",
    "message"
  ],
  titleSubtitle: ["titleSubtitle", "title2"],
  title2: ["title2"],
  submitButton: ["submitButton"],
  button2: ["button2", "freeBox"],
  freeBox: ["freeBox"],
  content: [
    "content",
    "combobox",
    "generalInquiry",
    "support",
    "feedback",
    "name",
    "email",
    "message"
  ],
  combobox: ["combobox", "generalInquiry", "support", "feedback"],
  generalInquiry: ["generalInquiry"],
  support: ["support"],
  feedback: ["feedback"],
  name: ["name"],
  email: ["email"],
  message: ["message"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  popUp: "div";
  titleSubtitle: "div";
  title2: "div";
  submitButton: typeof SubmitButton;
  button2: "button";
  freeBox: "div";
  content: "div";
  combobox: typeof Combobox;
  generalInquiry: typeof MenuItem;
  support: typeof MenuItem;
  feedback: typeof MenuItem;
  name: typeof TextInput;
  email: typeof TextInput;
  message: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopup__VariantsArgs;
    args?: PlasmicPopup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPopup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPopup__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPopup__ArgProps,
          internalVariantPropNames: PlasmicPopup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPopup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPopup";
  } else {
    func.displayName = `PlasmicPopup.${nodeName}`;
  }
  return func;
}

export const PlasmicPopup = Object.assign(
  // Top-level PlasmicPopup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    popUp: makeNodeComponent("popUp"),
    titleSubtitle: makeNodeComponent("titleSubtitle"),
    title2: makeNodeComponent("title2"),
    submitButton: makeNodeComponent("submitButton"),
    button2: makeNodeComponent("button2"),
    freeBox: makeNodeComponent("freeBox"),
    content: makeNodeComponent("content"),
    combobox: makeNodeComponent("combobox"),
    generalInquiry: makeNodeComponent("generalInquiry"),
    support: makeNodeComponent("support"),
    feedback: makeNodeComponent("feedback"),
    _name: makeNodeComponent("name"),
    email: makeNodeComponent("email"),
    message: makeNodeComponent("message"),

    // Metadata about props expected for PlasmicPopup
    internalVariantProps: PlasmicPopup__VariantProps,
    internalArgProps: PlasmicPopup__ArgProps
  }
);

export default PlasmicPopup;
/* prettier-ignore-end */
