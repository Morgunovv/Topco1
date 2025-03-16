// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector206IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector206Icon(props: Vector206IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M67.632 25.141c1.362-3.648 5.528-9.877-1.289-9.025-6.274.784-12.844 3.477-15.859 9.348-.508.99-2.893 6.559-.129 5.93 3.101-.704 5.837-3.995 7.994-6.027 3.43-3.23 7.934-6.973 10.25-11.185 3.343-6.078-6.164-9.568-10.218-10.798C45.014-.671 32.001.959 18.501 4.459c-4.717 1.6-16.98 4.618-17.495 11.303-.188 2.451 3.781 2.966 4.495 2.697 7.038-2.654 15.072-8.617 22.098-11.304"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector206Icon;
/* prettier-ignore-end */
