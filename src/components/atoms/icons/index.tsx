import React from "react";
import { Icon } from "@iconify/react";

interface IconProps{
  icon: string;
  url?: string;
};

const IconSocial = ({ icon, url }: IconProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <Icon icon={icon} className="bg-primary rounded-full h-12 w-12" />
    </a>
  );
};

const IconCard = ({ icon }: IconProps) => {
  return <Icon icon={icon} className="h-12 w-12 text-primary"/>;
};

export { IconSocial, IconCard };
