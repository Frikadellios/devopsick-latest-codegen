// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ResearchSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ResearchSvgrepoComsvgIcon(
  props: ResearchSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 496 496"}
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
          "M449.472 152c3.312 9.296 12.112 16 22.528 16 13.232 0 24-10.768 24-24s-10.768-24-24-24c-10.416 0-19.216 6.704-22.528 16h-161.88c-1.528-27.648-10.792-53.224-25.808-74.568l4.296-1.952C270.016 62.296 274.8 64 280 64c6.352 0 12.096-2.52 16.392-6.568l47.928 27.392c-.144 1.048-.32 2.088-.32 3.176 0 13.232 10.768 24 24 24s24-10.768 24-24c0-2.448-.472-4.76-1.16-6.984l67.904-37.04A23.793 23.793 0 00472 48c13.232 0 24-10.768 24-24S485.232 0 472 0s-24 10.768-24 24c0 2.448.472 4.76 1.16 6.984l-67.904 37.04A23.793 23.793 0 00368 64c-6.352 0-12.096 2.52-16.392 6.568L303.68 43.176c.136-1.048.32-2.088.32-3.176 0-13.232-10.768-24-24-24s-24 10.768-24 24c0 2.12.36 4.128.88 6.088l-5.376 2.44C225.104 18.84 186.752 0 144 0 64.6 0 0 64.6 0 144c0 68.392 47.968 125.68 112 140.288V312H80v16h16v120c0 26.472 21.528 48 48 48s48-21.528 48-48V328h16v-16h-32v-27.712c38.32-8.744 70.784-32.8 90.744-65.384C270.736 226.64 278.712 232 288 232c6.64 0 12.648-2.712 17-7.08l55.24 20.712c-.08.792-.24 1.56-.24 2.368 0 13.232 10.768 24 24 24s24-10.768 24-24c0-.36-.088-.688-.104-1.048l46.592-6.656C458.872 245.008 465.072 248 472 248c13.232 0 24-10.768 24-24s-10.768-24-24-24-24 10.768-24 24c0 .36.088.688.104 1.048l-46.592 6.656C397.128 226.992 390.928 224 384 224c-6.64 0-12.648 2.712-17 7.08l-55.24-20.712c.08-.792.24-1.56.24-2.368 0-13.232-10.768-24-24-24-2.08 0-4.064.352-5.992.848 3.112-10.496 4.952-21.512 5.584-32.848h161.88zM472 136c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0-120c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM368 80c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm-88-48c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm192 184c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm-88 24c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM176 448c0 17.648-14.352 32-32 32s-32-14.352-32-32V328h64v120zm-48-136v-24.944c5.256.584 10.584.944 16 .944s10.736-.36 16-.944V312h-32zm16-40c-70.576 0-128-57.424-128-128S73.424 16 144 16c36.232 0 68.92 15.2 92.232 39.472l-23.504 10.68C194.376 49.936 170.352 40 144 40 86.656 40 40 86.656 40 144s46.656 104 104 104c33.624 0 63.48-16.112 82.504-40.944l25.632 5.128C229.432 248.056 189.504 272 144 272zm-16-152c-13.232 0-24 10.768-24 24s10.768 24 24 24c10.416 0 19.216-6.704 22.528-16H231.6c-1.232 13.568-5.592 26.208-12.296 37.304l-20.392-4.08C195.96 175.304 186.864 168 176 168c-13.232 0-24 10.768-24 24s10.768 24 24 24c9.912 0 18.432-6.04 22.088-14.624l10.568 2.112C192.56 220.968 169.576 232 144 232c-48.52 0-88-39.48-88-88s39.48-88 88-88c19.68 0 37.816 6.576 52.488 17.536l-6.576 2.984C185.984 73.704 181.2 72 176 72c-13.232 0-24 10.768-24 24s10.768 24 24 24 24-10.768 24-24c0-2.112-.36-4.128-.88-6.088l10.224-4.648c12.352 13.728 20.488 31.304 22.248 50.736h-81.064c-3.312-9.296-12.112-16-22.528-16zm8 24c0 4.416-3.584 8-8 8s-8-3.584-8-8 3.584-8 8-8 8 3.584 8 8zm48 48c0 4.416-3.584 8-8 8s-8-3.584-8-8 3.584-8 8-8 8 3.584 8 8zm0-96c0 4.416-3.584 8-8 8s-8-3.584-8-8 3.584-8 8-8 8 3.584 8 8zm76.144 101.472l-24.272-4.856c6.528-12.288 10.608-26.04 11.72-40.616h24c-1.008 16.152-4.984 31.48-11.448 45.472zM247.592 136c-1.664-21.76-9.984-41.68-23.024-57.656l22.336-10.152c14.2 19.232 23.112 42.512 24.688 67.808h-24zM288 200c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8z"
        }
      ></path>
    </svg>
  );
}

export default ResearchSvgrepoComsvgIcon;
/* prettier-ignore-end */