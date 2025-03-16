// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundFrame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundFrame3Icon(props: BackgroundFrame3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 375 1058"}
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
          "M0 996.335V50.8C44.514-4.685 157.517-17.324 284.42 25.87c32.032 10.9 62.481 24.52 90.58 40.089v324.06h-.002v344.415l.002.003v280.433c-36.19 26.84-86.213 41.72-144.051 42.57h-10.585c-42.87-.62-89.704-8.78-138.167-25.28C53.505 1022.4 25.969 1010.3 0 996.335z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackgroundFrame3Icon;
/* prettier-ignore-end */
