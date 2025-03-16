// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon02Dark3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon02Dark3Icon(props: Icon02Dark3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.6 13.95v16.8a9.333 9.333 0 009.333 9.333h22.4a9.336 9.336 0 008.557-5.6H31.4a8.4 8.4 0 01-8.4-8.4v-7.466a8.4 8.4 0 018.4-8.4h9.49a9.336 9.336 0 00-8.557-5.6h-22.4A9.333 9.333 0 00.6 13.95z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M26.733 18.617v7.466A4.667 4.667 0 0031.4 30.75h9.333a4.667 4.667 0 004.667-4.667v-7.466a4.667 4.667 0 00-4.667-4.667H31.4a4.667 4.667 0 00-4.667 4.667zm9.334 3.733a2.8 2.8 0 11-5.6 0 2.8 2.8 0 015.6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon02Dark3Icon;
/* prettier-ignore-end */
