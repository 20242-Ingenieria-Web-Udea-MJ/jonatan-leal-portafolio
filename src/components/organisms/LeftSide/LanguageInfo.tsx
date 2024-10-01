import React from 'react'
import  LanguageInfo from '@/components/molecules//LanguagePercentage'
import HorizontalLine from '@/components/atoms/HorizontalLine'
import Title from '@/components/atoms/Title'


/**
 * Renders a list of languages.
 *
 * This component renders a list of languages with their respective proficiency.
 *
 * @return {React.ReactElement} The rendered list of languages.
 */
const Languages = () => {
  return (
    <>
      <Title title="Languages" />
      <LanguageInfo language="Spanish" percentage={100} />
      <LanguageInfo language="English" percentage={55} />
      <HorizontalLine />
    </>
  )
}

export default Languages
