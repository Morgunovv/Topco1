// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundFrame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundFrame2Icon(props: BackgroundFrame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 375 598"}
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
          "M0 116.527v-84.15C42.584-.186 142.792-10.08 254.135 11.423c44.724 8.636 85.873 21.3 120.865 36.348v502.168c-44.921 42.941-146.308 60.315-257.261 38.889C74.07 580.395 34.041 566.941 0 550.278V116.527z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackgroundFrame2Icon;
/* prettier-ignore-end */
