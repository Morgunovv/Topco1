// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Handwrite6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Handwrite6Icon(props: Handwrite6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 6.644C7.651 4.332 18.183.354 24.7 2.732c8.146 2.973 5.744 7.061 22.766 2.15C70.022-1.624 81.753 6.644 91 6.644"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Handwrite6Icon;
/* prettier-ignore-end */
