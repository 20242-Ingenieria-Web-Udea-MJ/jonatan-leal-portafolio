import React from 'react'

import  Text  from '@/components/atoms/Text'

type AlignedTextProps = {
  leftText: string
  leftTextClasses?: string
  rightText: string
  rightTextClasses?: string
}

const AlignedText = (props: AlignedTextProps) => {
  /**
   * A component that renders two `Text` components, one aligned to the left
   * and the other aligned to the right.
   *
   * @prop {string} leftText The text to render on the left.
   * @prop {string} [leftTextClasses] Additional CSS classes to apply to the left text.
   * @prop {string} rightText The text to render on the right.
   * @prop {string} [rightTextClasses] Additional CSS classes to apply to the right text.
   *
   * @returns {React.ReactElement} The rendered aligned text.
   */
  const rightTextClasses = `text-right ${props.rightTextClasses || ''}`
  const leftTextClasses = `text-left ${props.leftTextClasses || ''}`
  return (
    <div className="mb-1 mt-2 flex justify-between">
      <Text classes={leftTextClasses}>{props.leftText}</Text>
      <Text classes={rightTextClasses}>{props.rightText}</Text>
    </div>
  )
}

export default AlignedText
