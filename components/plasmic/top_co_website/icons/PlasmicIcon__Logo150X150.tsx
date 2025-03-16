// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo150X150IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo150X150Icon(props: Logo150X150IconProps) {
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
          "M38.591 45.666a.66.66 0 011.002.324l5.571 15.703a.666.666 0 01-.787.875l-20.514-5.25c-.551-.142-.682-.874-.214-1.201L38.59 45.666z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M42.19 42.2a.677.677 0 01-.04-.226V26.148a.664.664 0 00-.85-.642l-17.578 5.248a.664.664 0 01-.851-.642V19.884c0-.209.096-.406.26-.533L46.04 1.714a.66.66 0 01.977.2l13.837 24.338c.098.172.115.38.047.566L49.25 58.603a.66.66 0 01-1.246-.007L42.19 42.2zM17.005 3.086a.66.66 0 01.41-.189l21.142-1.742c.66-.055.983.795.456 1.2l-18.02 13.852a.657.657 0 01-.586.11L8.54 12.861a.673.673 0 01-.28-1.122l8.745-8.653z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.237 16.339a.663.663 0 01.842-.56l12.577 3.673a.669.669 0 01.479.644V34.97c0 .447.426.77.851.642l17.457-5.225a.664.664 0 01.85.642v9.448c0 .22-.105.425-.284.55l-19.58 13.75a.658.658 0 01-.827-.057L2.51 40.643a.674.674 0 01-.208-.575l2.935-23.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo150X150Icon;
/* prettier-ignore-end */
