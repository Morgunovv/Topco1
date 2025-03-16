// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1817245911IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1817245911Icon(props: Group1817245911IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 35"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.12 1.882c1.678 3.628-.806 6.454-2.258 7.413 4.288-1.895 4.91-.64 7.5 2.303-1.43-4.736.294-4.656 2.323-7.192-4.12 1.244-5.009.31-7.565-2.524zm23.197 2.325c.593 10.502-8.22 15.009-12.7 15.95 12.324-.486 12.63 3.186 16.116 12.897 1.088-12.974 5.23-11.107 12.65-15.346-11.284-.946-12.556-4.091-16.066-13.501z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1817245911Icon;
/* prettier-ignore-end */
