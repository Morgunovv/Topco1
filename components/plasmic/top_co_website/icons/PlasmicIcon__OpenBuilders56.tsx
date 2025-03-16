// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenBuilders56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenBuilders56Icon(props: OpenBuilders56IconProps) {
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
          "M28.415 52c-3.491 0-6.742-.59-9.753-1.772-2.967-1.182-5.542-2.823-7.724-4.924a23.255 23.255 0 01-5.105-7.483C4.61 34.977 4 31.87 4 28.5s.61-6.477 1.833-9.321c1.222-2.845 2.923-5.317 5.105-7.418 2.182-2.144 4.757-3.807 7.724-4.989C21.629 5.591 24.88 5 28.415 5c3.49 0 6.698.59 9.622 1.772 2.967 1.138 5.542 2.78 7.724 4.923a21.282 21.282 0 015.105 7.418c1.222 2.845 1.833 5.974 1.833 9.387 0 3.413-.611 6.542-1.833 9.387a21.95 21.95 0 01-5.105 7.483c-2.182 2.1-4.757 3.742-7.724 4.923C35.113 51.431 31.906 52 28.415 52zm0-5.842c2.53 0 4.865-.438 7.004-1.313 2.181-.875 4.058-2.1 5.629-3.676a16.97 16.97 0 003.73-5.645c.917-2.145 1.375-4.486 1.375-7.024 0-2.538-.458-4.88-1.374-7.024a16.271 16.271 0 00-3.731-5.58c-1.571-1.619-3.448-2.866-5.63-3.741-2.138-.875-4.472-1.313-7.003-1.313-2.575 0-4.953.438-7.135 1.313a16.917 16.917 0 00-5.629 3.742c-1.614 1.575-2.88 3.435-3.796 5.58-.873 2.144-1.31 4.485-1.31 7.023 0 2.538.437 4.88 1.31 7.024a17.846 17.846 0 003.796 5.645 17.43 17.43 0 005.63 3.676c2.181.875 4.56 1.313 7.134 1.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpenBuilders56Icon;
/* prettier-ignore-end */
