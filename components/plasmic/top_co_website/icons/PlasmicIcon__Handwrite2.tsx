// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Handwrite2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Handwrite2Icon(props: Handwrite2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 152 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 9.701c9.372-3.834 26.837-10.43 37.645-6.487 13.51 4.93 9.526 11.71 37.756 3.566 37.406-10.79 56.86 2.921 72.195 2.921"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Handwrite2Icon;
/* prettier-ignore-end */
