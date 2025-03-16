// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIcons3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIcons3Icon(props: SocialIcons3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.326 1.904H21.7l-7.37 8.424L23 21.79h-6.789l-5.317-6.952L4.81 21.79H1.434l7.883-9.01L1 1.904h6.961l4.806 6.355 5.56-6.355zm-1.184 17.867h1.87L6.945 3.817H4.94l12.203 15.954z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIcons3Icon;
/* prettier-ignore-end */
