import React from 'react'
import PercentageBar from '@/components/atoms/PercentageBar'
import AlignedText from '@/components/molecules/AlignedText'

type LanguageInfoProps = {
  language: string
  percentage: number
}

/**
 * Renders a LanguageInfo component.
 *
 * This component renders a AlignedText component with the language in the left
 * and the percentage in the right. It also renders a PercentageBar with the
 * given percentage.
 *
 * @param {LanguageInfoProps} props - The props for the LanguageInfo component.
 * @param {string} props.language - The name of the language.
 * @param {number} props.percentage - The percentage of the language.
 * @returns {React.ReactElement} The rendered LanguageInfo component.
 */
const LanguageInfo = (props: LanguageInfoProps) => {
  return (
    <>
      <AlignedText
        leftText={props.language}
        rightText={`${props.percentage}%`}
      />
      <PercentageBar percentage={props.percentage} />
    </>
  )
}

export default LanguageInfo
