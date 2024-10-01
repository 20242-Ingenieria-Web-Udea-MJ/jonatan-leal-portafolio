import React from 'react'
import HorizontalLine from '@/components/atoms/HorizontalLine'
import Title from '@/components/atoms/Title'
import { LanguageInfo } from '@/components/molecules'


/**
 * Renders a list of programming languages with their respective proficiency.
 *
 * This component renders a list of LanguageInfo components.
 *
 * @returns {React.ReactElement} The rendered list of programming languages.
 */
const ProgrammingLanguages = () => {
  return (
    <>
      <Title title="Programming Languages" classes="whitespace-nowrap" />
      <LanguageInfo language="Java" percentage={70} />
      <LanguageInfo language="Python" percentage={60} />
      <LanguageInfo language="Javascript" percentage={40} />
      <HorizontalLine />
    </>
  )
}

export default ProgrammingLanguages
