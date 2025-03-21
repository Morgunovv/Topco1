// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RequiredSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RequiredSvgIcon(props: RequiredSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.92 8.27l.132-2.699L.784 7.04.081 5.826l2.408-1.23-2.408-1.23.703-1.231 2.268 1.468L2.92.904h1.406l-.123 2.699 2.259-1.468.703 1.23-2.4 1.23 2.4 1.231-.703 1.213-2.259-1.468.123 2.699H2.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RequiredSvgIcon;
/* prettier-ignore-end */
