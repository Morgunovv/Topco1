// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tVrjFA7RVCG7zyycB4xXud
// Component: i7CIl4afDTa3

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

import { BaseDialogTrigger } from "@plasmicpkgs/react-aria/skinny/registerDialogTrigger";
import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";
import { BaseModal } from "@plasmicpkgs/react-aria/skinny/registerModal";
import ContactUsPopup from "../../ContactUsPopup"; // plasmic-import: apyUXb51frmk/component
import { BaseDialog } from "@plasmicpkgs/react-aria/skinny/registerDialog";

import { useScreenVariants as useScreenVariantsknLyTCzNv2Gm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KNLyTCzNV2Gm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tVrjFA7RVCG7zyycB4xXud/projectcss
import sty from "./PlasmicModal.module.css"; // plasmic-import: i7CIl4afDTa3/css

createPlasmicElementProxy;

export type PlasmicModal__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicModal__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicModal__VariantsArgs;
export const PlasmicModal__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicModal__ArgsType = {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
};
type ArgPropType = keyof PlasmicModal__ArgsType;
export const PlasmicModal__ArgProps = new Array<ArgPropType>(
  "isOpen",
  "closeOnBackdropClick",
  "showHeader",
  "showFooter",
  "isKeyboardDismissDisabled",
  "onOpenChange"
);

export type PlasmicModal__OverridesType = {
  ariaDialogTrigger?: Flex__<typeof BaseDialogTrigger>;
  ariaButton?: Flex__<typeof BaseButton>;
  text?: Flex__<"div">;
  ariaModal?: Flex__<typeof BaseModal>;
  ariaDialog?: Flex__<typeof BaseDialog>;
  scrollableContent?: Flex__<"div">;
};

export interface DefaultModalProps {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicModal__RenderFunc(props: {
  variants: PlasmicModal__VariantsArgs;
  args: PlasmicModal__ArgsType;
  overrides: PlasmicModal__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          closeOnBackdropClick: true,
          showHeader: true,
          showFooter: true
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaDialogTrigger.isOpen",
        type: "writable",
        variableType: "boolean",

        valueProp: "isOpen",
        onChangeProp: "onOpenChange"
      },
      {
        path: "ariaModal.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,

        refName: "ariaModal"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsknLyTCzNv2Gm()
  });

  return (
    <BaseDialogTrigger
      data-plasmic-name={"ariaDialogTrigger"}
      data-plasmic-override={overrides.ariaDialogTrigger}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.ariaDialogTrigger,
        {
          [sty.ariaDialogTriggernoTrigger]: hasVariant(
            $state,
            "noTrigger",
            "noTrigger"
          )
        }
      )}
      dialog={
        <BaseModal
          data-plasmic-name={"ariaModal"}
          data-plasmic-override={overrides.ariaModal}
          className={classNames("__wab_instance", sty.ariaModal, {
            [sty.ariaModalnoTrigger]: hasVariant(
              $state,
              "noTrigger",
              "noTrigger"
            )
          })}
          defaultOpen={true}
          isDismissable={args.closeOnBackdropClick}
          isKeyboardDismissDisabled={args.isKeyboardDismissDisabled}
          isOpen={generateStateValueProp($state, ["ariaModal", "isOpen"])}
          modalOverlayClass={classNames({ [sty["pcls_n0DMrlodKvxj"]]: true })}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["ariaModal", "isOpen"]).apply(
              null,
              eventArgs
            );
          }}
          ref={ref => {
            $refs["ariaModal"] = ref;
          }}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens
          )}
        >
          <ContactUsPopup
            className={classNames("__wab_instance", sty.contactUsPopup__v07C0)}
          />

          <BaseDialog
            data-plasmic-name={"ariaDialog"}
            data-plasmic-override={overrides.ariaDialog}
            className={classNames("__wab_instance", sty.ariaDialog, {
              [sty.ariaDialognoTrigger]: hasVariant(
                $state,
                "noTrigger",
                "noTrigger"
              )
            })}
          >
            <div
              data-plasmic-name={"scrollableContent"}
              data-plasmic-override={overrides.scrollableContent}
              className={classNames(projectcss.all, sty.scrollableContent)}
            >
              <ContactUsPopup
                className={classNames(
                  "__wab_instance",
                  sty.contactUsPopup__yf9Ew,
                  {
                    [sty.contactUsPopupnoTrigger__yf9Ew6Zdog]: hasVariant(
                      $state,
                      "noTrigger",
                      "noTrigger"
                    )
                  }
                )}
              />
            </div>
          </BaseDialog>
        </BaseModal>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={
        <BaseButton
          data-plasmic-name={"ariaButton"}
          data-plasmic-override={overrides.ariaButton}
          className={classNames("__wab_instance", sty.ariaButton, {
            [sty.ariaButtonnoTrigger]: hasVariant(
              $state,
              "noTrigger",
              "noTrigger"
            )
          })}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textnoTrigger]: hasVariant(
                  $state,
                  "noTrigger",
                  "noTrigger"
                )
              }
            )}
          >
            {hasVariant($state, "noTrigger", "noTrigger")
              ? "Contact Us"
              : "Open Dialog"}
          </div>
        </BaseButton>
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "ariaButton",
    "text",
    "ariaModal",
    "ariaDialog",
    "scrollableContent"
  ],
  ariaButton: ["ariaButton", "text"],
  text: ["text"],
  ariaModal: ["ariaModal", "ariaDialog", "scrollableContent"],
  ariaDialog: ["ariaDialog", "scrollableContent"],
  scrollableContent: ["scrollableContent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaDialogTrigger: typeof BaseDialogTrigger;
  ariaButton: typeof BaseButton;
  text: "div";
  ariaModal: typeof BaseModal;
  ariaDialog: typeof BaseDialog;
  scrollableContent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModal__VariantsArgs;
    args?: PlasmicModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModal__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicModal__ArgProps,
          internalVariantPropNames: PlasmicModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    ariaButton: makeNodeComponent("ariaButton"),
    text: makeNodeComponent("text"),
    ariaModal: makeNodeComponent("ariaModal"),
    ariaDialog: makeNodeComponent("ariaDialog"),
    scrollableContent: makeNodeComponent("scrollableContent"),

    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps
  }
);

export default PlasmicModal;
/* prettier-ignore-end */
