// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DevSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DevSvgrepoComsvgIcon(props: DevSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"32"} cy={"32"} r={"32"} fill={"#76c2af"}></circle>

      <path
        d={
          "M42.5 44c-.7 0-1.3-.3-1.7-1-.6-.9-.3-2.2.7-2.8L51.6 34v-.2l-10.1-6.2c-.9-.6-1.2-1.8-.7-2.8.6-.9 1.8-1.2 2.8-.7l10.6 6.6.2.2c.8.8 1.2 1.9 1.2 3s-.4 2.2-1.2 3l-.2.2-10.6 6.6c-.4.2-.8.3-1.1.3zm-21 0c-.4 0-.7-.1-1-.3L9.9 37.1l-.2-.1c-.8-.8-1.2-1.9-1.2-3s.4-2.2 1.2-3l.2-.2 10.6-6.6c.9-.6 2.2-.3 2.8.7.6.9.3 2.2-.7 2.8l-10.1 6.2v.2l10.1 6.2c.9.6 1.2 1.8.7 2.8-.4.6-1.1.9-1.8.9zm4 9c-.2 0-.5 0-.7-.1-1-.4-1.5-1.6-1.2-2.6l13-34c.4-1 1.6-1.5 2.6-1.2 1 .4 1.5 1.6 1.2 2.6l-13 34c-.3.8-1.1 1.3-1.9 1.3z"
        }
        fill={"#231f20"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M42.5 42c-.7 0-1.3-.3-1.7-1-.6-.9-.3-2.2.7-2.8L51.6 32v-.1l-10.1-6.2c-.9-.6-1.2-1.8-.7-2.8.6-.9 1.8-1.2 2.8-.7l10.6 6.6.2.2c1.6 1.6 1.6 4.3 0 6l-.2.2-10.6 6.6c-.4.1-.8.2-1.1.2zm-21 0c-.4 0-.7-.1-1-.3L9.9 35.1l-.2-.1c-1.6-1.6-1.6-4.3 0-6l.2-.2 10.6-6.6c.9-.6 2.2-.3 2.8.7.6.9.3 2.2-.7 2.8l-10.1 6.2v.1l10.1 6.2c.9.6 1.2 1.8.7 2.8-.4.7-1.1 1-1.8 1zm4 9c-.2 0-.5 0-.7-.1-1-.4-1.5-1.6-1.2-2.6l13-34c.4-1 1.6-1.5 2.6-1.2 1 .4 1.5 1.6 1.2 2.6l-13 34c-.3.8-1.1 1.3-1.9 1.3z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default DevSvgrepoComsvgIcon;
/* prettier-ignore-end */
