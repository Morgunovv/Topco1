// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo5Icon(props: Logo5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 68"}
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
          "M34 3.778C34 20.469 20.469 34 3.778 34 3.778 17.309 17.308 3.778 34 3.778zm0 60.444C17.309 64.222 3.778 50.692 3.778 34 20.469 34 34 47.53 34 64.222zM64.222 34c0 16.691-13.53 30.222-30.222 30.222C34 47.531 47.53 34 64.222 34zM61.704 6.296c0 13.91-11.276 25.186-25.185 25.186 0-13.91 11.275-25.186 25.185-25.186z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo5Icon;
/* prettier-ignore-end */
