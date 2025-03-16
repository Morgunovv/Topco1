// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Image21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Image21Icon(props: Image21IconProps) {
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
        d={
          "M24.756 9.645C26.053 4.615 26.702 2.1 28 2.1c1.298 0 1.947 2.515 3.245 7.545l1.123 4.356c.963 3.733 1.445 5.6 2.738 6.893 1.294 1.293 3.16 1.775 6.892 2.738l4.356 1.123C51.384 26.053 53.9 26.702 53.9 28s-2.515 1.947-7.546 3.244L42 32.368c-3.733.963-5.6 1.444-6.893 2.737-1.293 1.294-1.775 3.16-2.738 6.893l-1.123 4.356C29.947 51.384 29.298 53.9 28 53.9s-1.947-2.516-3.244-7.546l-1.124-4.356c-.963-3.733-1.444-5.599-2.738-6.892-1.293-1.294-3.16-1.775-6.892-2.738l-4.356-1.124C4.616 29.947 2.1 29.298 2.1 28c0-1.298 2.515-1.947 7.546-3.245l4.356-1.123c3.732-.963 5.599-1.445 6.892-2.738 1.294-1.294 1.775-3.16 2.738-6.893l1.124-4.356z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Image21Icon;
/* prettier-ignore-end */
