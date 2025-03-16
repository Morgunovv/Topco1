// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Hot51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Hot51Icon(props: Hot51IconProps) {
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
          "M37.425 18.29l-1.102 2.571a89.4 89.4 0 00-.732-1.809c-.533-1.275-1.215-2.815-1.8-3.843-1.29-2.491-4.01-5.138-6.45-7.152a45.712 45.712 0 00-3.278-2.473 19.448 19.448 0 00-1.11-.71 4.994 4.994 0 00-.362-.194 1.42 1.42 0 00-.136-.057.447.447 0 00-.142-.028c-.238 0-.377.173-.452.343-.076.17-.12.4-.148.658-.056.517-.056 1.237-.056 2.047v.013c0 1.646 0 3.696-.43 5.415-.65 2.452-1.708 3.485-3.88 5.606-.394.385-.824.805-1.295 1.276l-.057.036a11.085 11.085 0 00-.974.735 14.938 14.938 0 00-2.289 2.442c-1.665 2.22-3.325 5.656-3.325 10.521 0 9.772 9.4 17.718 19.906 17.718 10.53 0 18.598-8.848 17.717-18.602-.005-4.9-3.556-11.084-9.29-14.613l-.216-.133-.1.232z"
        }
        stroke={"currentColor"}
        strokeWidth={".435"}
      ></path>

      <path
        d={
          "M43.75 33.25a16.625 16.625 0 01-33.25 0c0-8.4 5.25-11.813 5.25-11.813s5.6-4.987 6.3-7.875c.875-3.587 0-7.437.7-7.437.525 0 5.95 4.55 8.137 9.188 3.588 7.524 2.8 15.312 6.738 3.85C42.7 24.937 43.75 29.4 43.75 33.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Hot51Icon;
/* prettier-ignore-end */
