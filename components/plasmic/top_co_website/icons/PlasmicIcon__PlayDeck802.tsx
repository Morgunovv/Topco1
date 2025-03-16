// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayDeck802IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayDeck802Icon(props: PlayDeck802IconProps) {
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
          "M38.946 11.2c7.485 0 13.554 6.076 13.554 13.572v7.917c0 6.87-5.563 12.44-12.425 12.44a12.39 12.39 0 01-9.188-4.064c-.844-.928-1.983-1.59-3.237-1.59-1.253 0-2.393.662-3.237 1.59a12.386 12.386 0 01-9.188 4.065C8.363 45.13 2.8 39.56 2.8 32.689v-7.917C2.8 17.276 8.869 11.2 16.355 11.2h22.59zm0 15.834a3.39 3.39 0 003.388-3.393 3.39 3.39 0 00-3.389-3.393 3.39 3.39 0 00-3.388 3.393 3.39 3.39 0 003.389 3.393zm-25.98-3.393a1.13 1.13 0 011.13-1.131h2.259c.623 0 1.13.506 1.13 1.13v3.394h3.388c.624 0 1.13.506 1.13 1.13v2.263a1.13 1.13 0 01-1.13 1.13h-3.389v3.394a1.13 1.13 0 01-1.13 1.13h-2.259a1.13 1.13 0 01-1.13-1.13v-3.393H9.578a1.13 1.13 0 01-1.13-1.131v-2.262a1.13 1.13 0 011.13-1.131h3.389V23.64zm29.368 11.31a3.39 3.39 0 01-3.389 3.393 3.39 3.39 0 01-3.388-3.393 3.39 3.39 0 013.389-3.393 3.39 3.39 0 013.388 3.393zm-9.036-2.262a3.39 3.39 0 003.388-3.393 3.39 3.39 0 00-3.388-3.393 3.39 3.39 0 00-3.389 3.393 3.39 3.39 0 003.389 3.393zm14.684-3.393a3.39 3.39 0 01-3.389 3.393 3.39 3.39 0 01-3.389-3.393 3.39 3.39 0 013.39-3.393 3.39 3.39 0 013.388 3.393z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayDeck802Icon;
/* prettier-ignore-end */
