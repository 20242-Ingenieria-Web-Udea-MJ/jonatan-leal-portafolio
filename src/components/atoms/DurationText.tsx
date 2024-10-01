import React from 'react'

type DurationTextProps = {
  initial: string
  final: string
}

/**
 * Renders a div with a duration text.
 *
 * @param {DurationTextProps} props The props for the DurationText component.
 * @param {string} props.initial The initial date of the duration.
 * @param {string} props.final The final date of the duration.
 * @returns {React.ReactElement} The rendered div with the duration text.
 */
const DurationText = (props: DurationTextProps) => {
  return (
    <div className="ml-4 h-4 w-32 items-center rounded-sm border-none bg-primary text-center">
      <p className="text-xs text-white">
        {props.initial} - {props.final}
      </p>
    </div>
  )
}

export default DurationText
