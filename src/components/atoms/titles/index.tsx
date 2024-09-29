import React from "react";

interface TitleProps {
  title: string;
  align: string;
}

const TitlePrincipal = ({ title, align }: TitleProps) => {
  return <b><h1 className={`text-3xl text-${align}`}>{title}</h1></b>;
};

const TitleSecondary = ({ title, align }: TitleProps) => {
  return <h1 className={`text-lg text-${align}`}>{title}</h1>;
};

export { TitlePrincipal, TitleSecondary };
