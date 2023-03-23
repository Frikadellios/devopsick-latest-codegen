// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindowDevToolsSvgrepoCom1SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WindowDevToolsSvgrepoCom1SvgIcon(
  props: WindowDevToolsSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.857 9c.105.01.21.024.314.044l-1.65 2.858a1.167 1.167 0 102.02 1.167l1.651-2.859a3.501 3.501 0 01-2.975 5.762l-3.031 5.25a1.458 1.458 0 01-2.527-1.458l3.026-5.24A3.5 3.5 0 0119.857 9zM16.5 2c.88 0 1.685.325 2.3.862l.15.138H19v.05c.571.583.94 1.365.993 2.232L20 5.5v2.51a4.512 4.512 0 00-1.76.165l-.24.08V7H4v9.5a1.5 1.5 0 001.356 1.493L5.5 18h8.023l-.73 1.264c-.101.177-.179.36-.233.548l-.046.188H5.5a3.5 3.5 0 01-3.495-3.308L2 16.5v-11c0-.88.325-1.685.862-2.3L3 3.05V3h.05a3.488 3.488 0 012.232-.993L5.5 2h11zm-4.35 7.178a.5.5 0 01.639-.058l.069.058 2.288 2.292a4.49 4.49 0 00-.037 1.847l.056.258-2.307 2.31a.5.5 0 01-.766-.637l.058-.07 2.643-2.646-2.643-2.647a.5.5 0 010-.707zm-2.293 0a.5.5 0 010 .707l-2.65 2.647 2.65 2.646a.5.5 0 11-.707.707l-3.003-3a.5.5 0 010-.707l3.003-3a.5.5 0 01.707 0z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default WindowDevToolsSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
