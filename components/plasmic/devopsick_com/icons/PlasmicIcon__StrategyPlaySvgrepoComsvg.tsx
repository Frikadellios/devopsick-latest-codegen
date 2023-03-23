// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StrategyPlaySvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StrategyPlaySvgrepoComsvgIcon(
  props: StrategyPlaySvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27 18.64c-1.302 0-2.36 1.059-2.36 2.36s1.059 2.36 2.36 2.36 2.36-1.059 2.36-2.36-1.058-2.36-2.36-2.36zm0 4A1.641 1.641 0 1128.64 21c0 .905-.736 1.64-1.64 1.64zm-7-4c-1.302 0-2.36 1.059-2.36 2.36s1.059 2.36 2.36 2.36 2.36-1.059 2.36-2.36-1.058-2.36-2.36-2.36zm0 4A1.641 1.641 0 1121.64 21c0 .905-.736 1.64-1.64 1.64zm0 3c-1.302 0-2.36 1.059-2.36 2.36s1.059 2.36 2.36 2.36 2.36-1.059 2.36-2.36-1.058-2.36-2.36-2.36zm0 4A1.641 1.641 0 1121.64 28c0 .905-.736 1.64-1.64 1.64zm-7-6.28c1.301 0 2.36-1.059 2.36-2.36s-1.059-2.36-2.36-2.36-2.36 1.059-2.36 2.36 1.059 2.36 2.36 2.36zm0-4c.904 0 1.64.735 1.64 1.64s-.736 1.64-1.64 1.64-1.64-.735-1.64-1.64.736-1.64 1.64-1.64zM10.746 5.746L12.491 4l-1.746-1.746.509-.509L13 3.491l1.746-1.746.509.509L13.509 4l1.746 1.746-.509.509L13 4.509l-1.746 1.746-.508-.509zm6.999 10L19.491 14l-1.746-1.746.51-.509L20 13.491l1.745-1.745.51.509L20.509 14l1.746 1.746-.51.509L20 14.509l-1.745 1.745-.51-.508zM27 10.491l1.745-1.745.51.509L27.509 11l1.746 1.746-.51.509L27 11.509l-1.745 1.745-.51-.509L26.491 11l-1.746-1.746.51-.509L27 10.491zM10 27.64h6v.721h-6c-.054 0-5.36-.062-5.36-5.36V5.868L3.255 7.254l-.51-.509L4.997 4.49l2.257 2.254-.509.51L5.36 5.87V23c0 4.587 4.451 4.64 4.64 4.64zM24.35 2.859l.01 2.139c0 2.66-2.198 3.362-3.36 3.362h-4c-3.584 0-3.64 3.492-3.64 3.641v5h-.72v-5c0-.043.05-4.36 4.36-4.36h4c.106 0 2.64-.044 2.64-2.64l-.01-2.12-1.374 1.374-.51-.509L24 1.491l2.255 2.255-.51.509-1.395-1.396z"
        }
      ></path>

      <path fill={"none"} d={"M0 0h32v32H0z"}></path>
    </svg>
  );
}

export default StrategyPlaySvgrepoComsvgIcon;
/* prettier-ignore-end */
