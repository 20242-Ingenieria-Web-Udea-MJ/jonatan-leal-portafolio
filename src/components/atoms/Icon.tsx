import React from "react";
import { Icon as Iconify } from "@iconify/react";

type IconProps = {
  icon: string;
  classes?: string;
};

/**
 * Renders an icon from the iconify library.
 *
 * @param {IconProps} props The props for the Icon component.
 * @param {string} props.icon The name of the icon to render.
 * @param {string} [props.classes] The classes to apply to the rendered icon.
 * @returns {React.ReactElement} The rendered icon.
 */
const Icon = (props: IconProps) => {
  return <Iconify icon={props.icon} className={`${props.classes || ""}`} />;
};

export default Icon;
