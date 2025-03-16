// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union3Icon(props: Union3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 44"}
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
          "M24.914 13.811C31.57 3.505 40.73-2.246 46.056.83c5.683 3.281 4.847 15.367-1.867 26.996-5.618 9.731-13.573 16.058-19.35 15.94-5.763.01-13.63-6.293-19.202-15.942C-1.076 16.195-1.913 4.108 3.77.828 9.096-2.247 18.258 3.504 24.914 13.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union3Icon;
/* prettier-ignore-end */
