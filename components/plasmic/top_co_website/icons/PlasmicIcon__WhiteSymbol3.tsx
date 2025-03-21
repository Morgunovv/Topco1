// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiteSymbol3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiteSymbol3Icon(props: WhiteSymbol3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 29"}
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
          "M7.866 21.155c6.72 6.765 15.12 9.28 18.76 5.614 2.774-2.793 1.983-8.371-1.528-13.863a125.217 125.217 0 002.228-3.84 2.08 2.08 0 00-1.704-3.098 121.455 121.455 0 00-6.853-.193h-.03C12.51.632 5.522-.987 2.29 2.268c-3.64 3.665-1.143 12.12 5.577 18.887zm10.873-15.38c-2.29 0-4.565.065-6.824.193a2.08 2.08 0 00-1.704 3.098 124.88 124.88 0 006.842 10.924 2.09 2.09 0 003.432 0 124.939 124.939 0 004.613-7.084 30.462 30.462 0 00-4.05-5.023 31.709 31.709 0 00-2.309-2.108z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhiteSymbol3Icon;
/* prettier-ignore-end */
