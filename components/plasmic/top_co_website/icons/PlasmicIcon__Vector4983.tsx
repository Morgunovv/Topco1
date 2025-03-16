// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4983IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4983Icon(props: Vector4983IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 65 121"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.839 2c-52.842 25.247-52.124 76.135 23.674 115.775m0 0c-1.448-2.68-8.492-14.279-8.661-25.77m8.66 25.77c-2.714 1.826-15.335.465-27.671-6.125"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector4983Icon;
/* prettier-ignore-end */
