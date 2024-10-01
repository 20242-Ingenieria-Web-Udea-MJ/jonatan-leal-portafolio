import React from 'react'
import SocialMediaIcon from '@/components/molecules/SocialMediaIcon'


/**
 * A component that renders a list of social media icons.
 *
 * This component renders a list of SocialMediaIcon components, which are linked to the respective social media platform.
 *
 * @returns {React.ReactElement} The rendered list of social media icons.
 */
const SocialMedia = () => {
  return (
    <>
      <SocialMediaIcon
        icon="mdi:linkedin"
        link="#"
      />
      <SocialMediaIcon
        icon="mdi:github"
        link="#"
      />
    </>
  )
}

export default SocialMedia
