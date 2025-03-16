// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.09 0h-9.454v2.364H18.91v2.363h-4.727v2.364h-2.364v2.364H9.455v2.363H7.09v4.728H2.364v2.363H0v4.727h2.364V26h2.363v2.364h2.364v2.363h2.364v2.364h4.727v2.364h16.545V33.09h16.546V26h2.363v-2.364H52V18.91h-2.364v-2.363H44.91V9.454h-2.364V7.09h-2.363V4.727h-2.364V2.364h-4.727V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
