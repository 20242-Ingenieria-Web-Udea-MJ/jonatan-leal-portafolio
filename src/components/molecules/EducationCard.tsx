import React from 'react'
import DurationText from '@/components/atoms/DurationText'
import Text from '@/components/atoms/Text'
import  Title  from '@/components/atoms/Title'

type EducationCardProps = {
  title: string
  text: string
  initial: string
  final: string
  educationType: string
  description: string
}

  /**
   * Renders an education card component.
   *
   * This component renders a card with a title, text, duration and description.
   * It is used to display information about a course or degree.
   *
   * @param {EducationCardProps} props The props for the EducationCard component.
   * @param {string} props.title The title of the education card.
   * @param {string} props.text The text of the education card.
   * @param {string} props.initial The initial date of the education.
   * @param {string} props.final The final date of the education.
   * @param {string} props.educationType The type of education.
   * @param {string} props.description The description of the education.
   * @returns {React.ReactElement} The rendered education card.
   */
const EducationCard = (props: EducationCardProps) => {
  return (
    <div className="flex w-full flex-col gap-4 bg-white py-5 shadow-md shadow-white/40 lg:flex-row">
      <div className=" flex flex-col items-center px-6">
        <Title title={props.title} classes='whitespace-nowrap' />
        <div className="my-4 flex items-center lg:justify-between">
          <Text classes="whitespace-nowrap"> {props.text} </Text>
          <DurationText initial={props.initial} final={props.final} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-6">
        <Title title={props.educationType} />
        <Text classes="text text-justify">{props.description}</Text>
      </div>
    </div>
  )
}

export default EducationCard
