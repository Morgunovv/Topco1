// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union2Icon(props: Union2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 49"}
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
          "M27.776 15.398C35.196 3.908 45.41-2.504 51.348.924c6.335 3.658 5.403 17.132-2.082 30.097-6.255 10.834-15.108 17.884-21.546 17.772-6.428.03-15.215-7-21.435-17.774C-1.2 18.055-2.132 4.58 4.203.923c5.938-3.428 16.152 2.983 23.573 14.475z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union2Icon;
/* prettier-ignore-end */
