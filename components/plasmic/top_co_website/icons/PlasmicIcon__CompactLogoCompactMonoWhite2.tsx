// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompactLogoCompactMonoWhite2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CompactLogoCompactMonoWhite2Icon(
  props: CompactLogoCompactMonoWhite2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
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
          "M21.6 41.998l19.196-30.295.003-.001h-.001L22.51 21.978l-.912 20.02zm0 .001l-.001.001-.912-20.021L2.399 11.7l.001.001 19.198 30.296V42v-.002L21.6 42zM2.4 11.701l19.199 8.7 19.198-8.7L21.599 3 2.4 11.702z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompactLogoCompactMonoWhite2Icon;
/* prettier-ignore-end */
