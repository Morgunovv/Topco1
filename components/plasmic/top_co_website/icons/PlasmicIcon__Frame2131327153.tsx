// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2131327153IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2131327153Icon(props: Frame2131327153IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1h14.4M1 7h14.4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Frame2131327153Icon;
/* prettier-ignore-end */
