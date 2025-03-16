// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star2Icon(props: Star2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 75"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M37.5 0l1.321 6.551A37.843 37.843 0 0068.45 36.18L75 37.5l-6.551 1.321A37.843 37.843 0 0038.82 68.45L37.5 75l-1.321-6.551A37.843 37.843 0 006.55 38.82L0 37.5l6.551-1.321A37.843 37.843 0 0036.18 6.55L37.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star2Icon;
/* prettier-ignore-end */
