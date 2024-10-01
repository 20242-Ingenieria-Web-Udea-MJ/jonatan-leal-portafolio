import React from 'react'

type TextProps = {
  classes?: string
  children: React.ReactNode
}

/**
 * A simple text component.
 *
 * @prop {string} [classes] - Additional CSS classes to apply to the rendered text.
 * @prop {React.ReactNode} children - The text to render.
 *
 * @returns {React.ReactElement} The rendered text.
 */
const Text = (props: TextProps) => {
  const classNames = `${props.classes || ''}`
  return <p className={classNames}>{props.children}</p>
}

export default Text
