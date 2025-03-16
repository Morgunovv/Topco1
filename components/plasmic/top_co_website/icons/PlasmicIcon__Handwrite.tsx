// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandwriteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandwriteIcon(props: HandwriteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 713 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 22.536c135.345-18.74 476.777-31.726 708.774-6.63"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default HandwriteIcon;
/* prettier-ignore-end */
