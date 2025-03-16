// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Handwrite3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Handwrite3Icon(props: Handwrite3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 571 143"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.136 63.366c20 31.634 64.183 52.321 143.803 13.62m0 0c-2.974-.66-21.502 4.405-30.303-2.986m30.303 2.986c-5.996 3.078-12.891 16.809-19.803 22.014"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M516.473 21.413c1.342 9.515-6.337 14.29-10.344 15.49 11.183-1.384 11.742 1.935 15.656 10.51 0-11.894 3.914-10.51 10.344-14.936-10.344 0-11.742-2.766-15.656-11.064zm31.244 26.069c-3.593 14.893-17.779 17.467-24.422 16.893 17.389 4.511 16.271 9.76 17.042 24.767 6.978-17.631 11.969-13.285 24.098-16.073C549.1 67 548.651 62.08 547.717 47.482z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Handwrite3Icon;
/* prettier-ignore-end */
