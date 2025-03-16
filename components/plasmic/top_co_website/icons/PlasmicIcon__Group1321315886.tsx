// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315886IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315886Icon(props: Group1321315886IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 49"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".65"}
        d={
          "M28.922 42.957c-1.111 3.106-1.667 4.659-2.517 5.114-.73.39-1.627.39-2.358 0-.85-.455-1.405-2.008-2.517-5.114-1.994-5.577-4.401-12.432-6.162-17.852-1.749-5.382-3.815-12.286-5.473-17.948-.942-3.214-1.412-4.821-.993-5.688A2.51 2.51 0 0110.806.082c.954-.134 2.345.81 5.127 2.7l7.046 4.783c.811.55 1.217.826 1.656.932a2.5 2.5 0 001.182 0c.44-.106.845-.382 1.656-.932l7.046-4.784C37.301.893 38.692-.052 39.646.082a2.51 2.51 0 011.904 1.387c.42.867-.051 2.474-.992 5.688-1.659 5.662-3.725 12.566-5.474 17.948-1.76 5.42-4.168 12.275-6.162 17.852z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.407 31.872c-3.297-.097-4.945-.145-5.64-.814a2.518 2.518 0 01-.729-2.241c.17-.95 1.475-1.958 4.086-3.974 4.687-3.62 10.463-8.029 15.073-11.378 4.579-3.326 10.506-7.425 15.38-10.752C37.341.825 38.724-.119 39.678.012a2.51 2.51 0 011.907 1.382c.422.866-.046 2.48-.983 5.71l-2.372 8.18c-.273.941-.41 1.412-.375 1.863a2.5 2.5 0 00.365 1.124c.238.384.625.685 1.399 1.286l6.727 5.224c2.656 2.062 3.984 3.093 4.151 4.042a2.509 2.509 0 01-.73 2.238c-.695.668-2.37.717-5.717.815-5.898.172-13.102.34-18.761.34-5.698 0-12.962-.17-18.883-.344z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1321315886Icon;
/* prettier-ignore-end */
