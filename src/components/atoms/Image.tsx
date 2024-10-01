import React from 'react'

type ImageProps = {
  src?: string
  alt?: string
  classes?: string
}

/**
 * A simple Image component that renders an img tag.
 *
 * @param {string} [src] - The src attribute of the img tag.
 * @param {string} [alt] - The alt attribute of the img tag.
 * @param {string} [classes] - Additional CSS classes to apply to the img tag.
 * @returns {React.ReactElement} The rendered img tag.
 */
const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`mt-2 ${props.classes || ''}`}
    />
  )
}

export default Image
