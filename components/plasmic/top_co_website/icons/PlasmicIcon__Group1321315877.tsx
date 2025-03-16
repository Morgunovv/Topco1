// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315877IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315877Icon(props: Group1321315877IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 34.096h45.9"}
        stroke={"currentColor"}
        strokeWidth={"3.825"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M2 34.097C9.65 34.097 9.944 2 25.244 2S40.25 34.097 47.9 34.097"}
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M2 34.094c7.65 0 11.475-19.125 22.95-19.125s15.3 19.125 22.95 19.125"
        }
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M2 34.096c7.65 0 11.475-9.563 22.95-9.563s15.3 9.563 22.95 9.563"}
        stroke={"currentColor"}
        strokeWidth={"3.719"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Group1321315877Icon;
/* prettier-ignore-end */
