// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315966IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315966Icon(props: Group1321315966IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.339 22.99h22.99L24.339 0v22.99zM22.99 47.33L0 24.34h22.99v22.99zm1.349 0l22.99-22.99h-22.99v22.99zM0 22.99L22.99 0v22.99H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1321315966Icon;
/* prettier-ignore-end */
