// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon02DarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon02DarkIcon(props: Icon02DarkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 20.5v24c0 7.364 5.97 13.333 13.333 13.333h32c5.468 0 10.167-3.29 12.224-8H44c-6.627 0-12-5.372-12-12V27.167c0-6.628 5.373-12 12-12h13.557c-2.057-4.71-6.756-8-12.224-8h-32C5.97 7.167 0 13.137 0 20.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M37.333 27.167v10.666A6.667 6.667 0 0044 44.5h13.333A6.667 6.667 0 0064 37.833V27.167a6.667 6.667 0 00-6.667-6.667H44a6.667 6.667 0 00-6.667 6.667zM50.667 32.5a4 4 0 11-8 0 4 4 0 018 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon02DarkIcon;
/* prettier-ignore-end */
