// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Notcoin56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Notcoin56Icon(props: Notcoin56IconProps) {
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
        d={
          "M13.819 48h28.364c5.215 0 8.52-5.626 5.897-10.173L30.575 7.486c-1.143-1.981-4.006-1.981-5.148 0L7.918 37.826C5.298 42.368 8.603 48 13.815 48h.004zm16.77-31.415l3.812 7.378L43.6 40.415c.607 1.053-.143 2.402-1.413 2.402H30.592V16.581l-.003.004zm-18.18 23.833l9.195-16.459 3.812-7.374V42.82H13.822c-1.27 0-2.02-1.35-1.413-2.403z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Notcoin56Icon;
/* prettier-ignore-end */
