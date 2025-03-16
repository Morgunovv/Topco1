// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector209IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector209Icon(props: Vector209IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.138 41.072c-3.014-3.266-5.821-6.838-8.384-10.467-1.266-1.792-3.731-5.8-2.342-8.181 2.207-3.783 14.216-1.047 17.26-.376 3.16.696 6.156 1.77 8.992 3.325 1.028.563 3.708 2.105 2.573 2.4-4.83 1.252-10.962-.667-15.496-2.14-4.131-1.343-11.985-4.339-11.334-10.12.506-4.488 5.081-7.707 8.53-9.916C16.736 2.52 22.194 2.11 27.75 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.794"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector209Icon;
/* prettier-ignore-end */
