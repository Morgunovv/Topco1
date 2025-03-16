// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1321315887IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1321315887Icon(props: Group1321315887IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".65"}
        d={
          "M24.79 36.82c-.952 2.663-1.428 3.994-2.157 4.383a2.159 2.159 0 01-2.02 0c-.73-.39-1.206-1.72-2.158-4.383-1.71-4.78-3.773-10.656-5.283-15.301-1.499-4.613-3.27-10.53-4.691-15.385-.807-2.754-1.21-4.132-.85-4.875A2.15 2.15 0 019.262.07c.818-.114 2.01.695 4.395 2.314l6.04 4.1c.695.472 1.042.708 1.419.8.333.08.68.08 1.013 0 .376-.092.724-.328 1.419-.8l6.04-4.1C31.972.765 33.165-.044 33.983.07a2.15 2.15 0 011.631 1.189c.36.743-.044 2.12-.85 4.875-1.422 4.854-3.193 10.771-4.692 15.385-1.51 4.645-3.572 10.521-5.282 15.301z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.492 27.319c-2.826-.083-4.239-.125-4.835-.697A2.159 2.159 0 01.033 24.7c.145-.814 1.264-1.678 3.501-3.406 4.018-3.104 8.97-6.882 12.92-9.752C20.38 8.69 25.46 5.178 29.638 2.326 32.007.707 33.193-.102 34.01.01a2.15 2.15 0 011.635 1.185c.362.742-.04 2.126-.842 4.894L32.77 13.1c-.234.807-.351 1.21-.322 1.597.026.342.133.672.313.964.203.33.535.587 1.199 1.102l5.766 4.477c2.276 1.768 3.415 2.652 3.558 3.465a2.15 2.15 0 01-.626 1.92c-.596.571-2.03.613-4.9.697-5.055.148-11.23.292-16.081.292-4.884 0-11.11-.146-16.185-.295z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1321315887Icon;
/* prettier-ignore-end */
