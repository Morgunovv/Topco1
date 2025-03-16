// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Contact242IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Contact242Icon(props: Contact242IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
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
          "M.123 5.826C.347 3.272 2.22 1.373 4.769 1.091 6.112.943 7.836.833 10 .833c2.394 0 4.25.135 5.647.307 2.3.283 4.054 1.934 4.353 4.232.123.937.208 2.063.208 3.378s-.085 2.44-.208 3.378c-.3 2.298-2.053 3.949-4.353 4.232-1.396.172-3.253.307-5.647.307-.778 0-1.499-.015-2.166-.04a.846.846 0 00-.55.177c-1.216.943-3.122 2.344-4.675 3.14a.524.524 0 01-.734-.623l.852-2.766c.12-.39-.066-.804-.403-1.034-1.239-.846-2.057-2.212-2.201-3.847A33.399 33.399 0 010 8.75a33.4 33.4 0 01.123-2.924zM14.436 4.75c-1.091-.615-2.968.535-4.332 2.596C8.74 5.285 6.864 4.135 5.772 4.75c-1.164.656-.993 3.072.383 5.397 1.146 1.937 2.767 3.2 3.95 3.187 1.181.013 2.802-1.25 3.948-3.187 1.376-2.325 1.547-4.741.383-5.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Contact242Icon;
/* prettier-ignore-end */
