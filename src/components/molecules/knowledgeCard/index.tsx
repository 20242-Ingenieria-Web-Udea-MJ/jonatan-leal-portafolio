import React from "react";
import { IconCard } from "@/components/atoms/icons";
import { TitleSecondary, TextPrincipal } from "@/components/atoms/texts";

interface KnowledgeCardProps {
  icon: string;
  title: string;
  text: string;
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una tarjeta de conocimiento.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar.
// La propiedad "title" es la que se encarga de recibir el título que se desea mostrar.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// Se hace uso de los átomos "Icon", "Title" y "Text".
// Cuenta con animaciones de hover las cuales cambian el color del fondo, el color del texto y la escala del componente.
const KnowledgeCard = ({ icon, title, text }: KnowledgeCardProps) => {
  return (
    <div className="flex flex-col items-center rounded border-solid border-primary p-5 transition-all duration-1000 cursor-pointer hover:scale-95 w-80 h-56">
      <div className="pb-2">
        <IconCard icon={icon} />
      </div>
      <div className="pb-2">
        <TitleSecondary title={title} />
      </div>
      <div className="pb-2">
        <TextPrincipal text={text} />
      </div>
    </div>
  );
};

export default KnowledgeCard;
