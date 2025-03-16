// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiteSymbol2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiteSymbol2Icon(props: WhiteSymbol2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 47"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.175 33.844C23.999 44.668 37.527 48.69 43.39 42.827c4.214-4.214 3.322-12.388-1.532-20.671a16.158 16.158 0 014.242-2.291l1.885-.68c.815-.293.815-1.444 0-1.738l-1.885-.679A16.168 16.168 0 0135.919 5.585l-.733-2.846c-.238-.925-1.551-.925-1.79 0l-.41 1.599a16.15 16.15 0 01-2.222 4.964C20.71 1.025 9.413-1.592 4.192 3.629c-5.863 5.863-1.841 19.39 8.983 30.215zm17.59-24.542a16.168 16.168 0 01-9.826 6.767l-5.877 1.347c-.957.22-.957 1.582 0 1.801l5.877 1.347a16.168 16.168 0 0112.046 11.731l.412 1.6c.238.924 1.551.924 1.79 0l.732-2.847a16.168 16.168 0 015.939-8.892c-1.9-3.242-4.406-6.5-7.45-9.544a50.985 50.985 0 00-3.644-3.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhiteSymbol2Icon;
/* prettier-ignore-end */
