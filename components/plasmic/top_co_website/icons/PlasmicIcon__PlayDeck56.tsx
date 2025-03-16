// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayDeck56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayDeck56Icon(props: PlayDeck56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
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
          "M38.945 11.2c7.486 0 13.555 6.076 13.555 13.571v7.917c0 6.871-5.563 12.441-12.425 12.441-3.64 0-6.915-1.567-9.188-4.065-.844-.928-1.984-1.59-3.237-1.59-1.254 0-2.394.662-3.238 1.59a12.386 12.386 0 01-9.187 4.065c-6.862 0-12.425-5.57-12.425-12.44V24.77c0-7.494 6.068-13.57 13.554-13.57h22.591zm0 15.833a3.39 3.39 0 003.389-3.393 3.39 3.39 0 00-3.389-3.393 3.39 3.39 0 00-3.388 3.393 3.39 3.39 0 003.388 3.393zm-25.98-3.393c0-.625.506-1.13 1.13-1.13h2.26a1.13 1.13 0 011.129 1.13v3.393h3.388c.624 0 1.13.506 1.13 1.131v2.262a1.13 1.13 0 01-1.13 1.131h-3.388v3.393a1.13 1.13 0 01-1.13 1.131h-2.259a1.13 1.13 0 01-1.13-1.13v-3.394H9.578a1.13 1.13 0 01-1.13-1.13v-2.263a1.13 1.13 0 011.13-1.13h3.389V23.64zm29.369 11.31a3.39 3.39 0 01-3.389 3.393 3.39 3.39 0 01-3.388-3.393 3.39 3.39 0 013.388-3.393 3.39 3.39 0 013.389 3.393zm-9.037-2.262a3.39 3.39 0 003.39-3.393 3.39 3.39 0 00-3.39-3.393 3.39 3.39 0 00-3.388 3.393 3.39 3.39 0 003.389 3.393zm14.685-3.393a3.39 3.39 0 01-3.389 3.393 3.39 3.39 0 01-3.389-3.393 3.39 3.39 0 013.389-3.393 3.39 3.39 0 013.389 3.393z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayDeck56Icon;
/* prettier-ignore-end */
