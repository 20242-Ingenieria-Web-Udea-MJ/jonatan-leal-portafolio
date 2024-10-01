import React from 'react'
import Icon from '@/components/atoms/Icon'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'

type PortfolioCardProps = {
  icon: string
  title: string
  text: string
  url: string
}

/**
 * A portfolio card component.
 *
 * This component renders a card with an icon, title, text and a link to a repository.
 *
 * @param {PortfolioCardProps} props The props for the PortfolioCard component.
 * @param {string} props.icon The name of the icon to render.
 * @param {string} props.title The title of the portfolio card.
 * @param {string} props.text The text of the portfolio card.
 * @param {string} props.url The url of the repository.
 * @returns {React.ReactElement} The rendered portfolio card.
 */
const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className="flex h-full flex-col items-center rounded border-solid bg-white p-5 text-justify shadow-md shadow-white/40 transition-all duration-1000 cursor-pointer hover:scale-95">
      <Icon icon={props.icon} classes="text-6xl" />
      <Title title={props.title} classes="my-3" />
      <Text>{props.text}</Text>
      <a
        className="my-2 mt-auto rounded-sm px-4 py-2 text-sm font-semibold underline decoration-double decoration-4 underline-offset-8"
        href={props.url}
        target="_blank"
      >
        Repository
      </a>
    </div>
  )
}
//"underline text-slate-900 decoration-slate-900 decoration-double decoration-4 underline-offset-8
//
export default PortfolioCard
