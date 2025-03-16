// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Handwrite4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Handwrite4Icon(props: Handwrite4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 346 103"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.694 75.614c17.69 13.667 46.715 16.247 83.49-21.745m0 0c-1.804.237-11.167 6.866-17.617 4.517m17.617-4.517c-2.736 2.952-3.8 12.068-6.614 16.402"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M305.794 2.773c2.501 5.544-1.319 9.806-3.542 11.244 6.551-2.82 7.478-.903 11.375 3.614-2.106-7.227.517-7.08 3.64-10.908-6.285 1.832-7.625.4-11.473-3.95zm23.603 10.307c.455 9.685-7.709 13.762-11.848 14.59 11.366-.339 11.616 3.048 14.743 12.031 1.117-11.95 4.92-10.193 11.796-14.035-10.393-.972-11.538-3.882-14.691-12.587z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Handwrite4Icon;
/* prettier-ignore-end */
