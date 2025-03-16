// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M41.863 2.014A4.038 4.038 0 0038.375 0H8.638l3.861 6.689h21.266L23.132 25.105l3.862 6.69L41.863 6.04a4.038 4.038 0 000-4.027zM21.2 28.45L8.634 6.689h.012L4.787 0h-.761A4.04 4.04 0 00.538 2.014a4.039 4.039 0 000 4.027L17.71 35.786A4.038 4.038 0 0021.2 37.8c1.434 0 2.77-.771 3.488-2.014l.378-.654-3.862-6.69-.004.008zm-2.306 3.992l.003-.005a.026.026 0 01-.003.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
