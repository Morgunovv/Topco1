// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SymbolLight3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SymbolLight3Icon(props: SymbolLight3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.837 18.857H0l3.918-6.367h7.837l-3.918 6.367z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.242 3.429L25.756.245l5.052 8.75 5.053-8.75 5.514 3.184-5.232 9.06H48l-3.918 6.368h-7.58l4.923 8.529-5.514 3.183-5.103-8.838-5.103 8.838-5.514-3.183 4.924-8.529h-13.36l3.918-6.367h9.8l-5.231-9.061z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SymbolLight3Icon;
/* prettier-ignore-end */
