// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"10"}
        height={"10"}
        x={"1"}
        y={"1"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"0;_qGc7zo-6a.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6b.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"_qGc7zo-6c.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6d.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>
      </rect>

      <rect
        width={"10"}
        height={"10"}
        x={"1"}
        y={"13"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6e.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"_qGc7zo-6f.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6g.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"_qGc7zo-6h.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>
      </rect>

      <rect
        width={"10"}
        height={"10"}
        x={"13"}
        y={"13"}
        fill={"currentColor"}
        rx={"1"}
      >
        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"_qGc7zo-6i.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6j.end"}
          dur={"0.2s"}
          values={"13;1"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"x"}
          begin={"_qGc7zo-6k.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>

        <animate
          fill={"freeze"}
          attributeName={"y"}
          begin={"_qGc7zo-6l.end"}
          dur={"0.2s"}
          values={"1;13"}
        ></animate>
      </rect>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
