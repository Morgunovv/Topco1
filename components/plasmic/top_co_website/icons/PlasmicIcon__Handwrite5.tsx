// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Handwrite5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Handwrite5Icon(props: Handwrite5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.699 5.257C14.575 10.984 8.076 9.614 5.342 8.213c6.632 4.95 5.242 6.994 2.96 13.53 6.044-6.306 7.416-3.584 13.075-2.662-5.485-5.258-4.82-7.435-2.678-13.824z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Handwrite5Icon;
/* prettier-ignore-end */
