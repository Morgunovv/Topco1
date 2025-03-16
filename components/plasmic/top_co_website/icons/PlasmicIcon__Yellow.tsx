// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YellowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YellowIcon(props: YellowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.09 18.908V26h7.092v-2.363h2.363v-2.364h2.364v-2.364H7.091z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M21.273 0h9.454v2.364h-2.363v2.363H26v7.091h2.364v4.728H26v2.363h-2.364V26H26v2.364h2.364v2.363H11.818v-2.363h4.728v-4.728h2.363v-2.363h2.364v-2.364h-2.364v-2.363H7.091v2.363H4.727v4.727H2.364v-2.363H0v-4.727h4.727v-2.364h2.364V9.455h2.364V7.09h2.363V4.727h4.728V2.364h4.727V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YellowIcon;
/* prettier-ignore-end */
