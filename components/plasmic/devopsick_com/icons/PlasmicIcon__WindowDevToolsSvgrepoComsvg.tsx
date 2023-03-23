// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindowDevToolsSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WindowDevToolsSvgrepoComsvgIcon(
  props: WindowDevToolsSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 5.25A3.25 3.25 0 015.25 2h11.5A3.25 3.25 0 0120 5.25v2.76a4.508 4.508 0 00-1.5.096V7h-15v9.75c0 .966.784 1.75 1.75 1.75h7.985l-.441.764a2.457 2.457 0 00-.28.736H5.25A3.25 3.25 0 012 16.75V5.25zM5.25 3.5A1.75 1.75 0 003.5 5.25v.25h15v-.25a1.75 1.75 0 00-1.75-1.75H5.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.857 9a3.496 3.496 0 00-3.356 1.736 3.5 3.5 0 00.184 3.788l-3.025 5.24a1.459 1.459 0 002.526 1.458l3.03-5.25a3.5 3.5 0 002.976-5.761l-1.65 2.858a1.167 1.167 0 11-2.021-1.167l1.65-2.858A3.478 3.478 0 0019.857 9zm-4.692 4.575a4.496 4.496 0 01-.019-2.105l-2.288-2.292a.5.5 0 10-.708.707l2.643 2.647-2.643 2.646a.5.5 0 00.708.707l2.307-2.31zm-5.308-3.69a.5.5 0 10-.707-.707l-3.003 3a.5.5 0 000 .707l3.003 3a.5.5 0 00.707-.707l-2.65-2.646 2.65-2.647z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WindowDevToolsSvgrepoComsvgIcon;
/* prettier-ignore-end */
