// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315963IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315963Icon(props: Group1321315963IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 68"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M34.77 32.843h32.842L34.77 0v32.843zm-1.927 34.772L0 34.772h32.843v32.843zm1.927 0l32.842-32.843H34.77v32.843zM0 32.843L32.843 0v32.843H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1321315963Icon;
/* prettier-ignore-end */
