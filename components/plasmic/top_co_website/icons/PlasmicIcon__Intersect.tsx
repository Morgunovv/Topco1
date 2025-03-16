// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IntersectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IntersectIcon(props: IntersectIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 1317"}
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
          "M0 256.63V71.305C163.524-.41 548.32-22.197 975.879 25.156 1147.62 44.177 1305.63 72.07 1440 105.207V1211.15c-172.5 94.57-561.822 132.83-987.881 85.65-167.689-18.58-321.4-48.21-452.119-84.91V256.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IntersectIcon;
/* prettier-ignore-end */
