// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Expertise80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Expertise80Icon(props: Expertise80IconProps) {
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
          "M34.435 17.733a4.5 4.5 0 10-2.33-8.694 4.5 4.5 0 002.33 8.694zM10.72 35.475a4.5 4.5 0 10-2.329-8.693 4.5 4.5 0 002.33 8.693zM67.027 15.73a4.5 4.5 0 11-8.693 2.33 4.5 4.5 0 018.693-2.33zm-1.135 37.235c-.437-10.05-1.606-22.3-2.056-26.8a3.466 3.466 0 00-1.723-2.658 2.624 2.624 0 00-3.495.819l-7.096 10.659a2.056 2.056 0 01-3.428-.006c-3.608-5.424-7.519-10.865-9.51-13.6a3.276 3.276 0 00-3.502-1.23 3.276 3.276 0 00-2.417 2.816c-.357 3.364-1.023 10.031-1.435 16.533a2.056 2.056 0 01-2.966 1.719l-11.475-5.684a2.623 2.623 0 00-3.437 1.04 3.466 3.466 0 00-.163 3.163c1.86 4.122 6.973 15.315 11.62 24.238 1.043 2.002 2.438 3.905 4.543 4.722 4.874 1.893 11.838 1.062 18.542-.734 6.704-1.797 13.15-4.56 16.425-8.635 1.414-1.76 1.671-4.106 1.573-6.362zm-4.519 1.55c.786 2.934-5.712 7.225-14.514 9.583-8.803 2.359-16.575 1.892-17.362-1.042-.786-2.934 5.712-7.224 14.515-9.583 8.802-2.359 16.575-1.892 17.361 1.042z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Expertise80Icon;
/* prettier-ignore-end */
