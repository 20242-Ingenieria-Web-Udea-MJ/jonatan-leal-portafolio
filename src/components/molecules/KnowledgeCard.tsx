import React from 'react'
import Icon from '@/components/atoms/Icon'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'

type KnowledgeCardProps = {
  icon: string
  title: string
  text: string
}

const KnowledgeCard = (props: KnowledgeCardProps) => {
  /**
   * A knowledge card component.
   *
   * This component renders a card with an icon, title and text.
   * It is used to display information about a technology or skill.
   *
   * @param {KnowledgeCardProps} props The props for the KnowledgeCard component.
   * @param {string} props.icon The name of the icon to render.
   * @param {string} props.title The title of the knowledge card.
   * @param {string} props.text The text of the knowledge card.
   * @returns {React.ReactElement} The rendered knowledge card.
   */
  return (
    <div className="flex flex-col items-center rounded border-solid bg-white p-5 shadow-md shadow-white/40 transition-all duration-1000 cursor-pointer hover:scale-95">
      <Icon icon={props.icon} classes="text-6xl" />
      <Title title={props.title} classes="my-3" />
      <Text>{props.text}</Text>
    </div>
  )
}

export default KnowledgeCard
