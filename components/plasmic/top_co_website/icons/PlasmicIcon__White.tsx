// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiteIcon(props: WhiteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.09 0H2.365v2.364H0v7.09h2.364v2.364h9.454v-7.09H9.455V2.363H7.09V0zm0 9.455h2.365V7.09H7.09v2.364z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhiteIcon;
/* prettier-ignore-end */
