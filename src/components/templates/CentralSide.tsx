import React from 'react'
import EducationInfo from '@/components/organisms/CentralSide/EducationInfo'
import KnowledgeInfo from '@/components/organisms/CentralSide/KnowledgeInfo'
import MainInfo from '@/components/organisms/CentralSide/MainInfo'
import PortfolioInfo from '@/components/organisms/CentralSide/PortfolioInfo'
import Text from '@/components/atoms/Text'


/**
 * CentralSide component.
 *
 * This component renders the main content of the page, it's divided in four main sections:
 * - MainInfo: renders the main information about the author, including a photo, name, title, and a short description.
 * - KnowledgeInfo: renders the knowledge section, which includes the technical skills and programming languages that the author knows.
 * - EducationInfo: renders the education section, which includes the academic background of the author.
 * - PortfolioInfo: renders the portfolio section, which includes a list of projects that the author has worked on.
 *
 * The component also renders a footer with a copyright notice.
 *
 * @returns {React.ReactElement} The rendered CentralSide component.
 */
const CentralSide = () => {
  return (
    <section className="flex w-full flex-grow flex-col gap-4 bg-gray ">
      <MainInfo />
      <KnowledgeInfo />
      <EducationInfo />
      <PortfolioInfo />
      <footer className="rounded-sm bg-white py-1 text-center lg:mx-5">
        <Text classes="text-lg">2024. All Rights Reserved. </Text>
      </footer>
    </section>
  )
}

export default CentralSide
