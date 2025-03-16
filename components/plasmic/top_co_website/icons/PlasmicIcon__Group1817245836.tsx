// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1817245836IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1817245836Icon(props: Group1817245836IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.5 51.845h-27c-6.893 0-12.5-5.59-12.5-12.463V12.463C0 5.591 5.607 0 12.5 0h27C46.392 0 52 5.59 52 12.463v26.919c0 6.872-5.608 12.463-12.5 12.463zM12.5.815C6.06.816.818 6.042.818 12.464v26.919c0 6.422 5.24 11.647 11.682 11.647h27c6.441 0 11.682-5.225 11.682-11.647v-26.92C51.182 6.041 45.942.816 39.5.816h-27z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M33.162 23.59H15.653l-4.058-5.193v-6.184a2.8 2.8 0 00-2.803 2.794v4.35l4.059 5.214V36.84h-1.256V25.009L8.792 21.4v18.232h6.882V26.404H35.35l-2.188-2.814z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.678 12.213h-2.824v5.745l2.824 3.608v-9.353zm20.645 15.44H16.642l2.188 2.815h17.493v9.163h2.804V25.007l-2.804-3.609v6.255z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M43.207 21.566v-9.353h-6.883v7.144l4.059 5.214v15.063h.02a2.8 2.8 0 002.804-2.794V23.615l-4.08-5.218v-3.326h1.256v2.888l2.824 3.607z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1817245836Icon;
/* prettier-ignore-end */
