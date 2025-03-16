// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315878IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315878Icon(props: Group1321315878IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 29.51h39.343"}
        stroke={"currentColor"}
        strokeWidth={"3.825"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M2 29.512C8.557 29.512 8.81 2 21.924 2s12.862 27.512 19.42 27.512"}
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M2 29.51c6.557 0 9.836-16.394 19.672-16.394 9.835 0 13.114 16.393 19.671 16.393"
        }
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M2 29.51c6.557 0 9.836-8.196 19.672-8.196 9.835 0 13.114 8.197 19.671 8.197"
        }
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group1321315878Icon;
/* prettier-ignore-end */
