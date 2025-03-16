// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIcons4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIcons4Icon(props: SocialIcons4IconProps) {
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
          "M24 11.829c0 3.179-.533 5.758-1.19 5.758-.658 0-1.19-2.578-1.19-5.758s.532-5.759 1.19-5.759c.657 0 1.19 2.578 1.19 5.759zm-3.038-.001c0 3.55-1.515 6.428-3.384 6.428-1.87 0-3.385-2.879-3.385-6.428 0-3.55 1.515-6.428 3.385-6.428 1.869 0 3.384 2.878 3.384 6.428m-7.425 0c0 3.77-3.03 6.827-6.768 6.827S0 15.598 0 11.828 3.03 5 6.769 5c3.738 0 6.768 3.057 6.768 6.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIcons4Icon;
/* prettier-ignore-end */
