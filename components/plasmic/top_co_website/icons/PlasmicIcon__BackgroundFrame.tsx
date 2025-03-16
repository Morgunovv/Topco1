// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundFrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundFrameIcon(props: BackgroundFrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 560"}
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
          "M0 109.122V30.319C163.524-.174 548.32-9.438 975.879 10.697 1147.62 18.785 1305.63 30.644 1440 44.735v470.257c-172.5 40.212-561.822 56.482-987.881 36.417-167.689-7.897-321.4-20.496-452.119-36.1V308.985h.002V109.122H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackgroundFrameIcon;
/* prettier-ignore-end */
