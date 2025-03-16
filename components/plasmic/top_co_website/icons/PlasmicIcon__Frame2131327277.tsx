// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2131327277IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2131327277Icon(props: Frame2131327277IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 144 184"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M80.008 6.974c-11.5-1.5-22.856-1.847-34.5-.056-11.652 1.793-23.3 9.056-30.5 18.056-6 7.5-7 12-8 20.5 0 7.586-.5 12.5 6.5 27 3.5 5.5 5.502 7.836 8.5 11 3.43 3.622 6.345 7.048 10 10.5 6.07 5.733 13.723 13.679 21.778 16.777 11.222 6.223 13.722 11.723 32.722 9.723 7.03 0 29-11 11-18.5-7.293-3.242-13.5-4-21-3-9.912 1.322-14.5 5-20.5 10.5-5 4.5-9.759 12.993-10 19.277-.349 9.056 1.58 13.668 5.778 21.223 6.377 11.478 23.265 18.655 34.777 21.944 14.109 4.031 31.445 4.056 51.445 0"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Frame2131327277Icon;
/* prettier-ignore-end */
