// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ServerShieldSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ServerShieldSvgrepoComsvgIcon(
  props: ServerShieldSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      data-name={"Layer 1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"1.5"}
        y={"14.86"}
        width={"21"}
        height={"7.64"}
        rx={"1.91"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></rect>

      <path
        d={
          "M16.74 7.23h3.85a1.92 1.92 0 011.91 1.91V13a1.92 1.92 0 01-1.91 1.91H3.41A1.92 1.92 0 011.5 13V9.14a1.92 1.92 0 011.91-1.91h3.84"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></path>

      <path
        d={
          "M12 12.94h0a6.55 6.55 0 01-4.73-6.3V2.88L12 1.5l4.81 1.38v3.75A6.56 6.56 0 0112 12.94zm-7.64-1.89h1.91m-1.91 7.63h1.91m1.91 0h1.91m1.91 0h7.64m0-7.63h-4.59"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></path>
    </svg>
  );
}

export default ServerShieldSvgrepoComsvgIcon;
/* prettier-ignore-end */
