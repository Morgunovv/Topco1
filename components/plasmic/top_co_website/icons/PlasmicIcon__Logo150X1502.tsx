// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo150X1502IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo150X1502Icon(props: Logo150X1502IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.714 29.243a.423.423 0 01.642.208l3.568 10.056a.427.427 0 01-.504.56l-13.137-3.362a.43.43 0 01-.137-.769l9.568-6.693z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M27.019 27.024a.435.435 0 01-.025-.145V16.745a.425.425 0 00-.545-.411l-11.257 3.36a.425.425 0 01-.545-.41v-6.55a.43.43 0 01.168-.341L29.484 1.098a.422.422 0 01.625.128L38.97 16.81c.063.11.074.244.03.363l-7.46 20.354a.423.423 0 01-.798-.004l-3.723-10.5zM10.891 1.977a.422.422 0 01.263-.121L24.693.74c.423-.035.63.51.291.769l-11.54 8.87a.421.421 0 01-.374.07l-7.6-2.213a.43.43 0 01-.179-.719l5.6-5.54z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.355 10.463a.425.425 0 01.54-.359l8.053 2.353a.428.428 0 01.307.412v9.526c0 .286.273.492.545.411l11.18-3.346a.425.425 0 01.545.411v6.05a.43.43 0 01-.182.353l-12.538 8.805a.421.421 0 01-.53-.037L1.61 26.027a.432.432 0 01-.133-.368l1.88-15.196z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo150X1502Icon;
/* prettier-ignore-end */
