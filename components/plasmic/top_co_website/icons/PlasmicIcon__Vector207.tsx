// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector207IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector207Icon(props: Vector207IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 47"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.418 45.675c-3.36-3.64-6.49-7.623-9.348-11.668-1.411-1.998-4.16-6.466-2.61-9.122 2.46-4.217 15.848-1.168 19.243-.42 3.523.777 6.862 1.975 10.024 3.707 1.147.629 4.135 2.348 2.869 2.676-5.386 1.396-12.222-.742-17.277-2.385-4.605-1.497-13.361-4.837-12.635-11.282.563-5.004 5.664-8.593 9.508-11.056C18.546 2.695 24.63 2.24 30.824 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector207Icon;
/* prettier-ignore-end */
