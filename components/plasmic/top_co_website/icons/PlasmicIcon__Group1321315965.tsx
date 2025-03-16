// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315965IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315965Icon(props: Group1321315965IconProps) {
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
        d={
          "M20.862 19.706h19.706L20.862 0v19.706zm-1.156 20.863L0 20.863h19.706v19.706zm1.156 0l19.706-19.706H20.862v19.706zM0 19.706L19.706 0v19.706H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1321315965Icon;
/* prettier-ignore-end */
