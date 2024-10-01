import React from 'react'

type ButtonProps = {
  text: string
  size?: string
  classes?: string
  onClick?: () => void
}

/**
 * A basic button component.
 *
 * @prop {string} text - The text of the button.
 * @prop {string} [size] - The size of the button. Must be a valid CSS class.
 * @prop {string} [classes] - Additional CSS classes to apply to the button.
 * @prop {Function} [onClick] - The function to call when the button is clicked.
 * @returns {React.ReactElement} The rendered button.
 */
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white ${props.classes || ''} ${props.size || ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
