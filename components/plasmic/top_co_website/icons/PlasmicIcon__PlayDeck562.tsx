// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayDeck562IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayDeck562Icon(props: PlayDeck562IconProps) {
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
          "M33.382 9.6C39.798 9.6 45 14.807 45 21.231v6.786c0 5.89-4.768 10.664-10.65 10.664a10.62 10.62 0 01-7.875-3.484c-.724-.796-1.7-1.363-2.775-1.363s-2.052.567-2.775 1.363a10.617 10.617 0 01-7.875 3.484c-5.882 0-10.65-4.774-10.65-10.664v-6.786C2.4 14.808 7.6 9.6 14.018 9.6h19.364zm0 13.571a2.906 2.906 0 002.904-2.908c0-1.606-1.3-2.908-2.904-2.908a2.906 2.906 0 00-2.905 2.908c0 1.606 1.3 2.908 2.905 2.908zm-22.268-2.908a.97.97 0 01.968-.97h1.936a.97.97 0 01.968.97v2.908h2.905c.535 0 .968.434.968.97v1.939a.969.969 0 01-.968.969h-2.905v2.908c0 .536-.433.97-.968.97h-1.936a.969.969 0 01-.969-.97V27.05H8.21a.969.969 0 01-.968-.97v-1.938c0-.536.433-.97.968-.97h2.905v-2.908zm25.172 9.694c0 1.606-1.3 2.908-2.904 2.908a2.906 2.906 0 01-2.905-2.908c0-1.606 1.3-2.908 2.905-2.908a2.906 2.906 0 012.904 2.908zm-7.745-1.939a2.906 2.906 0 002.904-2.908c0-1.606-1.3-2.908-2.904-2.908a2.906 2.906 0 00-2.905 2.908c0 1.606 1.3 2.908 2.905 2.908zm12.586-2.908c0 1.606-1.3 2.908-2.904 2.908a2.906 2.906 0 01-2.905-2.908c0-1.606 1.3-2.908 2.905-2.908a2.906 2.906 0 012.904 2.908z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayDeck562Icon;
/* prettier-ignore-end */
