import React from 'react'
import { LanguageInfo } from '@/components/molecules'
import { Title, HorizontalLine } from '@/components/atoms'




/**
 * Renders a Frameworks component.
 *
 * This component renders a Title component with the text "Frameworks" and a
 * list of LanguageInfo components.
 *
 * @returns {React.ReactElement} The rendered Frameworks component.
 */
const Frameworks = () => {
  return (
    <>
      <Title title="Frameworks" />
      <LanguageInfo language="SpringBoot" percentage={70} />
      <LanguageInfo language="FastAPI" percentage={40} />
      <LanguageInfo language="NextJS" percentage={20} />
      <HorizontalLine margin="my-4" />
    </>
  )
}

export default Frameworks
