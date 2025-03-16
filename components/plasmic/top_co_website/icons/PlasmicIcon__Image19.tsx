// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Image19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Image19Icon(props: Image19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
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
          "M27.71 20.733C33.99 11.006 42.636 5.579 47.662 8.48c5.363 3.096 4.574 14.501-1.762 25.475C40.62 43.1 33.155 49.059 27.71 49c-5.445.06-12.91-5.9-18.19-15.044C3.184 22.982 2.395 11.576 7.758 8.48c5.025-2.902 13.67 2.525 19.952 12.252z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Image19Icon;
/* prettier-ignore-end */
