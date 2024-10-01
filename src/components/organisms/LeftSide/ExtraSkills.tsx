import React from 'react'
import { HorizontalLine } from "@/components/atoms"
import { Title } from "@/components/atoms"
import { IconText } from "@/components/molecules"



/**
 * Renders a list of extra skills.
 *
 * This component renders a list of icons and text.
 *
 * @return {React.ReactElement} The rendered list of extra skills.
 */
const ExtraSkills = () => {
  const icons = [
    { icon: 'mdi:git', text: 'Git' },
    { icon: 'mdi:github', text: 'Github' },
    { icon: 'mdi:docker', text: 'Docker' },
  ]

  return (
    <>
      <Title title="Extra Skills" />
      {icons.map((props) => (
        <IconText
          key={props.icon}
          {...props}
          iconClasses="text-2xl text-neutral-700"
        />
      ))}
      <HorizontalLine />
    </>
  )
}
export default ExtraSkills
