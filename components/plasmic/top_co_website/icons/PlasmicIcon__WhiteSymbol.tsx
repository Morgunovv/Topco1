// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiteSymbolIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiteSymbolIcon(props: WhiteSymbolIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 33"}
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
          "M8.99 24.177c7.68 7.732 17.279 10.605 21.439 6.417 3.171-3.193 2.267-9.568-1.745-15.844a142.89 142.89 0 002.546-4.39 2.377 2.377 0 00-1.948-3.54c-2.592-.146-5.204-.22-7.832-.22h-.034C14.296.722 6.311-1.128 2.616 2.592c-4.16 4.189-1.307 13.852 6.374 21.585zM21.416 6.6c-2.617 0-5.217.075-7.798.22a2.377 2.377 0 00-1.948 3.54 142.772 142.772 0 007.82 12.486 2.389 2.389 0 003.92 0 142.659 142.659 0 005.274-8.096 34.81 34.81 0 00-4.629-5.74 36.219 36.219 0 00-2.639-2.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhiteSymbolIcon;
/* prettier-ignore-end */
