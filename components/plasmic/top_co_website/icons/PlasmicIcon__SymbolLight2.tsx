// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SymbolLight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SymbolLight2Icon(props: SymbolLight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9.143 22H0l4.571-7.428h9.143L9.143 22z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M23.615 4L30.05.286l5.894 10.21L41.837.285 48.271 4l-6.104 10.572H56L51.428 22h-8.843l5.745 9.95-6.433 3.714-5.954-10.312-5.954 10.312-6.433-3.714L29.3 22H13.714l4.572-7.429h11.433L23.615 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SymbolLight2Icon;
/* prettier-ignore-end */
