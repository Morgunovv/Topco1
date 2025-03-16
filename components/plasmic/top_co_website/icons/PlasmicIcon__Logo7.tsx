// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo7Icon(props: Logo7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
          "M20.4 2.267C20.4 12.28 12.281 20.4 2.267 20.4c0-10.015 8.118-18.133 18.133-18.133zm0 36.266c-10.015 0-18.133-8.118-18.133-18.133C12.28 20.4 20.4 28.519 20.4 38.533zM38.533 20.4c0 10.015-8.118 18.133-18.133 18.133C20.4 28.52 28.519 20.4 38.533 20.4zm-1.51-16.622c0 8.345-6.766 15.11-15.112 15.11 0-8.345 6.766-15.11 15.111-15.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo7Icon;
/* prettier-ignore-end */
