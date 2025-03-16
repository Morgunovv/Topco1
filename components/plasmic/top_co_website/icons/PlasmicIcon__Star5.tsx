// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star5Icon(props: Star5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.94 0l.527 2.61A15.077 15.077 0 0027.27 14.414l2.61.526-2.61.527A15.076 15.076 0 0015.467 27.27l-.527 2.61-.526-2.61A15.077 15.077 0 002.61 15.467L0 14.94l2.61-.526A15.077 15.077 0 0014.414 2.61L14.94 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star5Icon;
/* prettier-ignore-end */
