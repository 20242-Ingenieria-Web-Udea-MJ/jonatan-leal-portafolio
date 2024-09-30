import React from "react";

const TitlePrincipal = ({title}: {title: string}) => {
  return (
    <b>
      <h1 className="text-3xl">{title}</h1>
    </b>
  );
};

const TitleSecondary = ({title}: {title: string}) => {
  return <h1 className="text-lg">{title}</h1>;
};

const TextPrincipal = ({text}: {text: string}) => {
  return <p className="text-gray text-base">{text}</p>;
};

export { TitlePrincipal, TitleSecondary, TextPrincipal };
