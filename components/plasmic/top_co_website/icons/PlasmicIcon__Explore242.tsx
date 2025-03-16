// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Explore242IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Explore242Icon(props: Explore242IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10.856 15.209a4.104 4.104 0 008.19.225l.009-.103a5.407 5.407 0 00-.067-1.484c-.305-1.636-1.104-5.754-2.142-9.808-.36-1.409-1.643-2.372-3.097-2.372-.873 0-1.664.342-2.247.898-.437.416-.97.768-1.573.768h-.362c-.538 0-1.025-.283-1.442-.623a3.182 3.182 0 00-2.017-.716c-1.428 0-2.686.945-3.04 2.328C2.049 8.3 1.265 12.34.966 13.947c-.09.48-.11.969-.065 1.456l.009.1a4.028 4.028 0 008.036-.22l.167-4.677a.438.438 0 00-.345-.437 8.198 8.198 0 01-.742-.212.833.833 0 11.527-1.581c.571.19 1 .27 1.403.27s.831-.08 1.403-.27a.833.833 0 01.527 1.581 7.68 7.68 0 01-.84.234.44.44 0 00-.353.44l.163 4.578zm6.6-.034c0 1.246-1.117 2.325-2.494 2.325-1.378 0-2.506-1.079-2.506-2.325 0-1.247 1.128-2.258 2.506-2.258 1.377 0 2.494 1.01 2.494 2.258zm-10 0c0 1.246-1.117 2.325-2.494 2.325-1.378 0-2.506-1.079-2.506-2.325 0-1.247 1.128-2.258 2.506-2.258 1.377 0 2.494 1.01 2.494 2.258z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Explore242Icon;
/* prettier-ignore-end */
