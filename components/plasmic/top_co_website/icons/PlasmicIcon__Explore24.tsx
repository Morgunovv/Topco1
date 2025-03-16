// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Explore24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Explore24Icon(props: Explore24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M13.027 18.25a4.925 4.925 0 009.827.27l.012-.123a6.496 6.496 0 00-.08-1.78c-.366-1.964-1.325-6.906-2.57-11.77C19.781 3.156 18.243 2 16.497 2a3.894 3.894 0 00-2.696 1.078c-.524.5-1.164.922-1.887.922h-.434c-.646 0-1.23-.34-1.731-.748a3.818 3.818 0 00-2.42-.86c-1.714 0-3.224 1.135-3.649 2.794-1.222 4.773-2.163 9.623-2.522 11.55a6.37 6.37 0 00-.078 1.747l.011.122a4.833 4.833 0 009.643-.265l.2-5.612a.526.526 0 00-.413-.525 9.82 9.82 0 01-.891-.255 1 1 0 11.632-1.897c.686.229 1.2.324 1.684.324s.998-.095 1.684-.324a1 1 0 11.632 1.898 9.3 9.3 0 01-1.008.28.528.528 0 00-.424.528l.196 5.494zm7.92-.04c0 1.496-1.34 2.79-2.993 2.79-1.653 0-3.007-1.294-3.007-2.79 0-1.497 1.354-2.71 3.007-2.71s2.993 1.213 2.993 2.71zm-12 0c0 1.496-1.34 2.79-2.993 2.79-1.653 0-3.007-1.294-3.007-2.79 0-1.497 1.354-2.71 3.007-2.71s2.993 1.213 2.993 2.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Explore24Icon;
/* prettier-ignore-end */
