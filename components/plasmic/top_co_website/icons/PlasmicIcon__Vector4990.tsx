// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4990IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4990Icon(props: Vector4990IconProps) {
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
          "M12.344 2C13.686 11.515 6.007 16.29 2 17.49 13.183 16.105 13.742 19.425 17.656 28c0-11.894 3.914-10.51 10.344-14.936-10.344 0-11.742-2.766-15.656-11.064z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector4990Icon;
/* prettier-ignore-end */
