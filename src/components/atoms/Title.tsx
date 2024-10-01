import React from 'react'

type TitleProps = {
  title: string
  size?: string
  classes?: string
}


/**
 * A Title component.
 *
 * This component renders a title given as a property.
 *
 * @param {{title: string, size?: string, classes?: string}} props - The properties of the title.
 * @returns {React.ReactElement} The rendered title.
 */
const Title = (props: TitleProps) => {
  return (
    <h2
      className={`${props.size || 'text-xl'} text-center font-semibold ${props.classes || ''}`}
    >
      {props.title}
    </h2>
  )
}

export default Title
