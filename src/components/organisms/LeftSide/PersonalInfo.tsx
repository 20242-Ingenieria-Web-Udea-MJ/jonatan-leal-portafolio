import React from 'react'
import HorizontalLine from '@/components/atoms/HorizontalLine'
import Image from '@/components/atoms/Image'
import Text from '@/components/atoms/Text'
import AlignedText from '@/components/molecules/AlignedText'


/**
 * Renders a personal information section.
 *
 * This component renders a card with a profile picture, name, residence, age,
 * freelance status, and address.
 *
 * @returns {React.ReactElement} The rendered personal information section.
 */
const PersonalInfo = () => {
  return (
    <>
      <Image
        src="/photo.png"
        alt="Jonatan Jair Leal González"
        classes="rounded-full w-64 h-64 lg:w-32 lg:h-32 mx-auto"
      />
      <Text classes="text-center text-2xl font-bold"> Jonatan Jair</Text>
      <Text classes="text-center text-xl"> Leal González</Text>
      <Text classes="text-center italic whitespace-nowrap">
        {' '}
        Systems engineering student
      </Text>
      <Text classes="text-center italic"> UdeA</Text>
      <HorizontalLine />
      <AlignedText
        leftText="Age:"
        rightText="31"
        rightTextClasses="font-semibold text-neutral-700"
      />
      <AlignedText leftText="Residence:" rightText="CO" />
      <AlignedText
        leftText="Freelance:"
        rightText="Available"
        rightTextClasses="font-semibold text-lime-500"
      />
      <AlignedText leftText="Address:" rightText="Medellín, Colombia" rightTextClasses='whitespace-nowrap'/>
      <HorizontalLine />
    </>
  )
}
export default PersonalInfo
