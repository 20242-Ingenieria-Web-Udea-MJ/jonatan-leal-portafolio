import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

/**
 * A horizontal line that can be used to separate sections of content.
 *
 * @param {HorizontalLineProps} props - The properties of the horizontal line.
 * @param {string} [props.margin] - The margin above and below the horizontal line.
 * @returns A horizontal line element.
 */
const HorizontalLine = (props: HorizontalLineProps) => {
  return <hr className={`mx-auto h-px w-10/12 ${props.margin || 'my-4'}`} />
}

export default HorizontalLine
