// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSolid24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSolid24Icon(props: IconSolid24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M9 1.5c-2.071 0-3.946.84-5.303 2.197A7.477 7.477 0 001.5 9c0 2.071.84 3.946 2.197 5.303A7.477 7.477 0 009 16.5c2.071 0 3.946-.84 5.303-2.197A7.477 7.477 0 0016.5 9c0-2.071-.84-3.946-2.197-5.303A7.476 7.476 0 009 1.5zm0 6.56a.75.75 0 01.75.75v3.484a.75.75 0 01-1.5 0V8.81A.75.75 0 019 8.06zm.75-2.323a.75.75 0 00-1.5 0v.388a.75.75 0 001.5 0v-.388z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSolid24Icon;
/* prettier-ignore-end */
