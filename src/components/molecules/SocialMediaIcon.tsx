import React from 'react'
import { Icon } from '@/components/atoms'

type SocialMediaIconProps = {
  icon: string
  iconClasses?: string
  link: string
}

/**
 * A social media icon component.
 *
 * This component renders a link with an icon. The properties are:
 * - icon: The name of the icon to render.
 * - iconClasses?: The classes to apply to the rendered icon.
 * - link: The link of the social media.
 *
 * @param {SocialMediaIconProps} props The props of the SocialMediaIcon component.
 * @returns {React.ReactElement} The rendered social media icon.
 */
const SocialMediaIcon = (props: SocialMediaIconProps) => {
  return (
    <a
      href={props.link}
      className="flex items-center justify-center rounded-full bg-primary p-2 hover: hover:duration-1000 hover:scale-95"
    >
      <Icon
        icon={props.icon}
        classes={`text-4xl  ${props.iconClasses || ''}`}
      />
    </a>
  )
}

export default SocialMediaIcon
