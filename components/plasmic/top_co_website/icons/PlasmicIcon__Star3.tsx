// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star3Icon(props: Star3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30 0l1.057 5.24A30.274 30.274 0 0054.76 28.944L60 30l-5.24 1.057A30.274 30.274 0 0031.056 54.76L30 60l-1.057-5.24A30.274 30.274 0 005.24 31.056L0 30l5.24-1.057A30.274 30.274 0 0028.944 5.24L30 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star3Icon;
/* prettier-ignore-end */
