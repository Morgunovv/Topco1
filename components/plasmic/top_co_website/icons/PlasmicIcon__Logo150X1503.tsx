// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo150X1503IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo150X1503Icon(props: Logo150X1503IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.014 31.966a.462.462 0 01.701.227l3.9 10.992a.467.467 0 01-.55.613l-14.36-3.676a.47.47 0 01-.15-.84l10.459-7.316z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M29.533 29.54a.473.473 0 01-.027-.158V18.304a.465.465 0 00-.596-.45l-12.305 3.674a.465.465 0 01-.596-.45V13.92a.47.47 0 01.183-.373L32.227 1.2a.461.461 0 01.684.14l9.686 17.036c.069.12.081.266.033.397l-8.155 22.249a.463.463 0 01-.872-.005l-4.07-11.477zM11.904 2.16a.462.462 0 01.287-.132l14.8-1.22c.462-.038.687.557.318.841l-12.614 9.696a.46.46 0 01-.41.077l-8.307-2.42a.47.47 0 01-.196-.785l6.122-6.057z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.666 11.437a.464.464 0 01.59-.392l8.803 2.572a.468.468 0 01.335.45v10.412c0 .314.299.54.596.45l12.22-3.658a.465.465 0 01.596.45v6.614a.47.47 0 01-.2.385l-13.705 9.625a.46.46 0 01-.58-.04L1.757 28.45a.472.472 0 01-.146-.402l2.055-16.61z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo150X1503Icon;
/* prettier-ignore-end */
