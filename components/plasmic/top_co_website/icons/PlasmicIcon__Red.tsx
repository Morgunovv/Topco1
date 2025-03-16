// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RedIcon(props: RedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.364 0h18.909v4.727H7.09v2.364h9.454v4.727H2.365V9.455H0V2.364h2.364V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RedIcon;
/* prettier-ignore-end */
