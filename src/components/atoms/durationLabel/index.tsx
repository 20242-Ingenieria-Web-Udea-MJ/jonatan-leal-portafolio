import React from "react";

type DurationLabelProps = {
  initial: string;
  final: string;
};

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar un texto de duración.
const DurationLabel = ({initial, final}: DurationLabelProps) => {
  return (
    <div className="h-6 w-fit items-center rounded-sm border-none bg-primary text-center">
      {initial} - {final}
    </div>
  );
};

export default DurationLabel;
