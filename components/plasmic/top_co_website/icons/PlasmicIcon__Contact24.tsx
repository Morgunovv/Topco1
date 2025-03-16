// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Contact24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Contact24Icon(props: Contact24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M.147 6.991c.27-3.065 2.517-5.344 5.576-5.681C7.333 1.132 9.403 1 12 1c2.873 0 5.1.161 6.777.368 2.759.34 4.864 2.321 5.223 5.078.147 1.125.25 2.476.25 4.054 0 1.578-.103 2.929-.25 4.054-.359 2.757-2.464 4.738-5.223 5.078C17.1 19.84 14.873 20 12 20c-.933 0-1.798-.017-2.599-.047a1.016 1.016 0 00-.66.212c-1.459 1.13-3.746 2.812-5.61 3.768a.629.629 0 01-.88-.747l1.021-3.32c.144-.468-.078-.965-.483-1.241C1.302 17.61.319 15.97.147 14.009A40.079 40.079 0 010 10.5C0 9.17.059 8 .147 6.991zM17.323 5.7c-1.31-.738-3.562.642-5.198 3.114C10.489 6.341 8.236 4.961 6.927 5.7c-1.397.787-1.192 3.686.459 6.476 1.375 2.325 3.32 3.84 4.739 3.825 1.419.015 3.364-1.5 4.74-3.825 1.65-2.79 1.855-5.69.458-6.476z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Contact24Icon;
/* prettier-ignore-end */
