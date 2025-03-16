// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo6Icon(props: Logo6IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M23.8 2.644C23.8 14.328 14.328 23.8 2.644 23.8c0-11.684 9.472-21.156 21.156-21.156zm0 42.312c-11.684 0-21.156-9.472-21.156-21.156 11.684 0 21.156 9.472 21.156 21.156zM44.956 23.8c0 11.684-9.472 21.156-21.156 21.156 0-11.684 9.472-21.156 21.156-21.156zM43.193 4.407c0 9.737-7.893 17.63-17.63 17.63 0-9.736 7.893-17.63 17.63-17.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo6Icon;
/* prettier-ignore-end */
