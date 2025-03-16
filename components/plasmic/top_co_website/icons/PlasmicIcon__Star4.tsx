// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star4Icon(props: Star4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.675 0l.658 3.263a18.846 18.846 0 0014.755 14.754l3.263.658-3.263.658a18.846 18.846 0 00-14.755 14.755l-.658 3.263-.658-3.263A18.846 18.846 0 003.263 19.333L0 18.675l3.263-.658A18.846 18.846 0 0018.017 3.263L18.675 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star4Icon;
/* prettier-ignore-end */
