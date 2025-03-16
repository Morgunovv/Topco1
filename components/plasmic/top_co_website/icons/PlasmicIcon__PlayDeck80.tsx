// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayDeck80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayDeck80Icon(props: PlayDeck80IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 80"}
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
          "M55.636 16C66.331 16 75 24.68 75 35.388v11.31c0 9.816-7.947 17.773-17.75 17.773-5.2 0-9.879-2.24-13.125-5.807-1.206-1.326-2.834-2.272-4.625-2.272-1.79 0-3.42.946-4.625 2.272A17.694 17.694 0 0121.75 64.47C11.947 64.471 4 56.514 4 46.698v-11.31C4 24.68 12.67 16 23.364 16h32.272zm0 22.62a4.844 4.844 0 004.841-4.847 4.844 4.844 0 00-4.84-4.848 4.844 4.844 0 00-4.842 4.848 4.844 4.844 0 004.841 4.847zm-37.113-4.847c0-.893.722-1.616 1.613-1.616h3.228c.89 0 1.613.723 1.613 1.616v4.847h4.841c.891 0 1.614.723 1.614 1.615v3.232c0 .892-.723 1.616-1.614 1.616h-4.84v4.847c0 .892-.723 1.615-1.614 1.615h-3.228a1.615 1.615 0 01-1.613-1.615v-4.847h-4.841a1.615 1.615 0 01-1.614-1.616v-3.232c0-.892.723-1.615 1.614-1.615h4.84v-4.847zM60.477 49.93a4.844 4.844 0 01-4.84 4.847 4.844 4.844 0 01-4.842-4.847 4.844 4.844 0 014.841-4.847 4.844 4.844 0 014.841 4.847zm-12.909-3.232a4.844 4.844 0 004.841-4.847 4.844 4.844 0 00-4.84-4.847 4.844 4.844 0 00-4.842 4.847 4.844 4.844 0 004.841 4.847zm20.977-4.847a4.844 4.844 0 01-4.84 4.847 4.844 4.844 0 01-4.841-4.847 4.844 4.844 0 014.84-4.847 4.844 4.844 0 014.841 4.847z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayDeck80Icon;
/* prettier-ignore-end */
