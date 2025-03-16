// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M48.84 2.35A4.712 4.712 0 0044.77 0H10.077l4.505 7.804h24.81L26.987 29.29l4.506 7.803L48.84 7.048a4.71 4.71 0 000-4.699zM24.732 33.191L10.075 7.804h.013L5.584 0h-.887C3.024 0 1.464.9.627 2.35a4.712 4.712 0 000 4.698L20.663 41.75a4.71 4.71 0 004.069 2.349c1.673 0 3.232-.9 4.07-2.35l.44-.763-4.505-7.804-.005.008zm-2.689 4.658l.004-.006a.039.039 0 01-.004.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
