// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321317461IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321317461Icon(props: Group1321317461IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 158 89"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M64.417 7.984A2 2 0 0060.575 9.1l3.842-1.115zm6.667 22.98l-6.667-22.98L60.575 9.1l6.667 22.98 3.842-1.116z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M142.659 78.123L9.582 34.48c-1.677-.55-1.871-2.845-.31-3.67l31.547-16.647a2 2 0 012.011.085l99.829 63.875zm.102-.228L62.738 9.335a1 1 0 01.474-1.744l28.7-5.155a2 2 0 012.027.873l48.822 74.586z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default Group1321317461Icon;
/* prettier-ignore-end */
