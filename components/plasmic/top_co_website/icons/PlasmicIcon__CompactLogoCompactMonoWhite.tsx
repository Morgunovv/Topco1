// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompactLogoCompactMonoWhiteIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CompactLogoCompactMonoWhiteIcon(
  props: CompactLogoCompactMonoWhiteIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 51"}
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
          "M25.199 48.998l22.396-35.344.004-.002h-.002l-21.334 11.99-1.064 23.356zm0 .001v.002l-1.064-23.36-21.336-11.99v.001H2.8l22.397 35.346v.003l.001-.002v.002-.002zM2.8 13.651l22.398 10.15 22.398-10.15L25.198 3.502 2.8 13.652z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompactLogoCompactMonoWhiteIcon;
/* prettier-ignore-end */
