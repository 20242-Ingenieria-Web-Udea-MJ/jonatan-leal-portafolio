import React from 'react'
import { Title } from '../atoms'
import { SocialMedia } from '../organisms'


/**
 * A RightSide component.
 *
 * This component renders a section with a title and a social media list.
 * The title is only visible on large screens.
 *
 * @returns {React.ReactElement} The rendered RightSide component.
 */
const RightSide = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-2 bg-white p-2 lg:flex-col lg:justify-start  ">
      <Title title="Links" classes="hidden lg:block" />
      <SocialMedia />
    </section>
  )
}

export default RightSide
