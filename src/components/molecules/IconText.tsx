import React from 'react'
import Text from '@/components/atoms/Text'
import Icon from '@/components/atoms/Icon'

type IconTextProps = {
  icon: string
  iconClasses?: string
  text: string
}

/**
 * Renders an Icon and a Text component side by side.
 *
 * This component renders an icon and a text side by side, with a margin
 * between them. The icon is rendered with the given icon name and classes,
 * and the text is rendered with the given text.
 *
 * @prop {string} icon The name of the icon to render.
 * @prop {string} [iconClasses] The classes to apply to the rendered icon.
 * @prop {string} text The text to render.
 *
 * @returns {React.ReactElement} The rendered icon and text.
 */
const IconText = (props: IconTextProps) => {
  return (
    <div className="my-1 flex items-center">
      <Icon icon={props.icon} classes={`${props.iconClasses} ml-4 mr-2`} />
      <Text>{props.text}</Text>
    </div>
  )
}

export default IconText
