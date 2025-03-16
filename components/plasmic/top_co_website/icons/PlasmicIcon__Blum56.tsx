// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blum56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blum56Icon(props: Blum56IconProps) {
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
          "M23.79 1.75h4.776v4.768h14.86v4.767H48.2v33.373h-4.776v4.768H28.566v4.767H23.79v-4.767H8.4V6.518h15.39V1.75zm14.86 38.14h4.776v-9.535H38.65v-4.767h4.776v-9.535H38.65v-4.768H13.176v33.373H38.65v-4.767zM23.791 16.054h7.164v9.535h-7.164v-9.535zm0 14.303h9.552v4.767h-4.776v4.768h-4.776v-9.535z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Blum56Icon;
/* prettier-ignore-end */
