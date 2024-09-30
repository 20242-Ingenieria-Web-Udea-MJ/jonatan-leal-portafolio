import React from "react";
import { TitleSecondary, TextPrincipal } from "@/components/atoms/texts";
import DurationLabel from "@/components/atoms/durationLabel";
import { title } from "process";

interface EducationCardProps {
  title1: string;
  initial: string;
  final: string;
  title2: string;
  description: string;
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una tarjeta de educación.
// La propiedad "title" es la que se encarga de recibir el título de la educación.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// La propiedad "initial" es la que se encarga de recibir la fecha de inicio.
// La propiedad "final" es la que se encarga de recibir la fecha de finalización.
// La propiedad "educationType" es la que se encarga de recibir el tipo de educación.
// La propiedad "description" es la que se encarga de recibir la descripción de la educación.
// Se hace uso de los átomos "Title", "Text" y "DurationText".
// Cuenta con animaciones de hover las cuales cambian el color del fondo, el color del texto y la escala del componente.
const EducationCard = ({
  title1,
  initial,
  final,
  title2,
  description,
}: EducationCardProps) => {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      <div>
        <TitleSecondary title={title1} />
      </div>
      <div>
        <TitleSecondary title={title2} />
      </div>
      <div>
        <DurationLabel initial={initial} final={final} />
      </div>
      <div>
        <TextPrincipal text={description} />
      </div>
    </div>
  );
};

export default EducationCard;
