// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1817245910IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1817245910Icon(props: Group1817245910IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.617 3.48c3.104 6.71-1.489 11.933-4.173 13.707 7.927-3.505 9.077-1.185 13.866 4.26-2.645-8.76.545-8.611 4.296-13.3-7.617 2.3-9.262.574-13.989-4.666zM50.51 7.778c1.096 19.418-15.2 27.752-23.484 29.492 22.789-.898 23.355 5.891 29.8 23.847 2.011-23.988 9.672-20.537 23.39-28.376C59.351 30.991 57 25.177 50.508 7.778z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1817245910Icon;
/* prettier-ignore-end */
