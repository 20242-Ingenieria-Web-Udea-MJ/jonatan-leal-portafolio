import React from 'react'
import KnowledgeCard  from '@/components/molecules/KnowledgeCard'
import Title from '@/components/atoms/Title'




/**
 * Renders a section of the page with the information about the knowledge of the user.
 *
 * Each knowledge item is rendered as a KnowledgeCard component.
 *
 * @returns {React.ReactElement} The rendered Knowledge component.
 */
const Knowledge = () => {
  const knowledge = [
    {
      icon: 'mdi:server-outline',
      title: 'Backend',
      text: 'API Development, REST',
    },
    {
      icon: 'mdi:database',
      title: 'Databases',
      text: 'SQL, Data Modeling',
    },
    {
      icon: 'carbon:development',
      title: 'Good Practices',
      text: 'Clean Code, SOLID Principles, CI/CD',
    },
  ]

  return (
    <div className="w-full text-center">
      <Title title="Knowledge" size="text-3xl" classes="text-white" />
      <div className="grid w-full grid-cols-1 gap-5 p-5 lg:grid-cols-3">
        {knowledge.map((item, index) => (
          <KnowledgeCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Knowledge
