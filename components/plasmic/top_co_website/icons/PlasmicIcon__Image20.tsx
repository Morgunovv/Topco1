// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Image20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Image20Icon(props: Image20IconProps) {
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
          "M45.166 9.425c-2.647-6.44-10.035-9.49-16.454-6.793l-.7.294a12.432 12.432 0 01-6.47.86l-.752-.101C13.89 2.758 7.555 7.63 6.68 14.539l-.095.752a12.432 12.432 0 01-2.49 6.034l-.464.6C-.622 27.44.431 35.362 5.976 39.573l.604.459a12.432 12.432 0 013.98 5.173l.288.702c2.648 6.44 10.036 9.49 16.455 6.792l.7-.294a12.433 12.433 0 016.47-.86l.752.102c6.9.927 13.235-3.946 14.11-10.854l.095-.753a12.432 12.432 0 012.49-6.033l.464-.6c4.253-5.514 3.2-13.436-2.345-17.647l-.604-.459a12.432 12.432 0 01-3.98-5.174l-.289-.701zM25.005 35.209a8.017 8.017 0 106.118-14.82 8.017 8.017 0 00-6.118 14.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Image20Icon;
/* prettier-ignore-end */
