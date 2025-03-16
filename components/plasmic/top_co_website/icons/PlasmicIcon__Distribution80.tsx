// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Distribution80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Distribution80Icon(props: Distribution80IconProps) {
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
          "M65.19 29.497c2.191 8.181 3.23 14.525 3.72 18.499.34 2.756-1.467 5.226-4.15 5.945a5.83 5.83 0 01-2.46.126c-3.677-.608-14.743-2.544-22.74-5.073a1.982 1.982 0 01-1.352-1.62c-.068-.474-.146-1-.236-1.567-.379-2.393-.959-5.552-1.76-8.545-.803-2.993-1.88-6.019-2.748-8.28-.206-.536-.401-1.031-.579-1.475a1.982 1.982 0 01.361-2.08c5.66-6.188 14.276-13.398 17.157-15.763a5.83 5.83 0 012.193-1.121c2.683-.719 5.483.516 6.567 3.074 1.563 3.686 3.834 9.7 6.026 17.88zm-37.752-.237a1.917 1.917 0 012.292 1.156c.843 2.197 1.867 5.079 2.618 7.881.75 2.803 1.305 5.81 1.673 8.135a1.917 1.917 0 01-1.407 2.147l-12.38 3.317c-2.716.728-5.57-.535-6.574-3.162a51.16 51.16 0 01-1.628-4.993 51.126 51.126 0 01-1.087-5.138c-.443-2.777 1.397-5.298 4.113-6.026l12.38-3.317zm4.376 37.62l-6.618-11.921a1 1 0 01.615-1.452l5.974-1.6a1 1 0 011.134.48l5.89 10.61a4 4 0 01-6.995 3.883z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Distribution80Icon;
/* prettier-ignore-end */
