// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4984IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4984Icon(props: Vector4984IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 115"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.912 2C-11.472 16.081-.649 88.89 44.81 112.704m0 0c-.956-1.771-5.61-9.433-5.721-17.023m5.72 17.023c-1.793 1.206-10.13.307-18.28-4.046"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector4984Icon;
/* prettier-ignore-end */
