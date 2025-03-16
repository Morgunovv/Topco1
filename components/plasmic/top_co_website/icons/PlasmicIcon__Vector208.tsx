// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector208IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector208Icon(props: Vector208IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M60.766 22.654c1.221-3.273 4.958-8.86-1.156-8.096-5.627.704-11.52 3.119-14.225 8.385-.456.888-2.595 5.883-.115 5.32 2.781-.633 5.234-3.584 7.17-5.407 3.076-2.897 7.116-6.254 9.194-10.032 2.998-5.452-5.53-8.583-9.165-9.686-11.99-3.637-23.662-2.175-35.771.964C12.468 5.537 1.467 8.245 1.006 14.24c-.17 2.2 3.391 2.661 4.031 2.42 6.313-2.38 13.52-7.73 19.82-10.139"
        }
        stroke={"currentColor"}
        strokeWidth={"1.794"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector208Icon;
/* prettier-ignore-end */
