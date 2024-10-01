import React from 'react'
import Title from "@/components/atoms/Title"
import PortfolioCard from "@/components/molecules/PortfolioCard"


/**
 * PortfolioInfo component.
 *
 * This component renders a section of the page with the information about the
 * projects of the user. It uses the PortfolioCard component to display each
 * project item in the list.
 *
 * The component receives a list of project items as a prop, and it maps over
 * the list to render each item as a PortfolioCard component.
 *
 * @returns {React.ReactElement} The rendered PortfolioInfo component.
 */
const PortfolioInfo = () => {
  const items = [
    {
      icon: 'bi:book',
      title: 'Virtual Book Club',
      text: 'A REST API application designed to create virtual book clubs and facilitate communication and coordination between members.',
      url: 'https://github.com/jonaleal/virtual-bookclub-springboot.git',
    },
    {
      icon: 'fluent-emoji-high-contrast:health-worker',
      title: 'Diabetes Prediction',
      text: 'A REST API derived from a machine learning model that predicts if a person has diabetes based on their BMI and other health factors.',
      url: 'https://github.com/jonaleal/ia-proyecto-sustituto',
    },
    {
      icon: 'fluent-mdl2:device-bug',
      title: 'QA Automation',
      text: 'A testing artifact application to automate test scenarios and end-to-end tests for a web application.',
      url: 'https://github.com/jonaleal/QA-automation.git',
    },
  ]

  return (
    <div className="w-full">
      <Title title="Portfolio" size="text-3xl" classes="text-white" />
      <ul className="grid w-full grid-cols-1 gap-5 p-5 lg:grid-cols-2">
        {items.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default PortfolioInfo
