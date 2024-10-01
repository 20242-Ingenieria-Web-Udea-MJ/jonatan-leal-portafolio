import React from 'react'
import {
  Languages,
  ProgrammingLanguages,
  Frameworks,
  PersonalInfo,
  ExtraSkills,
} from '../organisms'


/**
 * The left side of the page, containing the personal information,
 * languages, programming languages, frameworks, and extra skills.
 *
 * @returns {React.ReactElement} The rendered left side of the page.
 */
const LeftSide = () => {
  return (
    <section className="w-full bg-white px-4 lg:w-fit">
      <PersonalInfo />
      <Languages />
      <ProgrammingLanguages />
      <Frameworks />
      <ExtraSkills />
    </section>
  )
}

export default LeftSide
