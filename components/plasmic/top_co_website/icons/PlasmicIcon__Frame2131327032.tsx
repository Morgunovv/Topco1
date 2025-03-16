// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2131327032IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2131327032Icon(props: Frame2131327032IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M23.838 47.675c13.165 0 23.837-10.672 23.837-23.837C47.675 10.672 37.003 0 23.838 0 10.672 0 0 10.672 0 23.838c0 13.165 10.672 23.837 23.838 23.837zm-.054-6.555c9.574 0 17.336-7.762 17.336-17.336 0-9.575-7.762-17.337-17.336-17.337-9.575 0-17.337 7.762-17.337 17.337 0 9.574 7.762 17.336 17.337 17.336z"
        }
        fill={"currentColor"}
      ></path>

      <ellipse
        cx={"19.117"}
        cy={"14.023"}
        rx={"3.004"}
        ry={"3.433"}
        transform={"rotate(-9.743 19.117 14.023)"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"12.633"}
        cy={"20.789"}
        rx={"3.004"}
        ry={"3.433"}
        transform={"rotate(-30 12.633 20.79)"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"3.004"}
        cy={"3.433"}
        rx={"3.004"}
        ry={"3.433"}
        transform={"scale(-1 1) rotate(-30 16.226 83.637)"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"3.004"}
        cy={"3.433"}
        rx={"3.004"}
        ry={"3.433"}
        transform={"scale(-1 1) rotate(-9.743 49.639 190.517)"}
        fill={"currentColor"}
      ></ellipse>

      <ellipse
        cx={"8.871"}
        cy={"9.558"}
        rx={"8.871"}
        ry={"9.558"}
        transform={"matrix(-1 0 0 1 32.806 19.318)"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Frame2131327032Icon;
/* prettier-ignore-end */
