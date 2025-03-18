// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type Hover1Value = "interactionStates";
export const Hover1Context = React.createContext<Hover1Value | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useHover1() {
  return React.useContext(Hover1Context);
}

export default Hover1Context;
/* prettier-ignore-end */
