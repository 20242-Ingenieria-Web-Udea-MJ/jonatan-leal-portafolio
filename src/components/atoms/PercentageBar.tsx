import React from 'react'

type PercentageBarProps = {
  percentage: number
}

/**
 * Renders a percentage bar.
 *
 * @prop {number} percentage The percentage value between 0 and 100.
 * @returns {React.ReactElement} The rendered percentage bar.
 */
const PercentageBar = (props: PercentageBarProps) => {
  return (
    <div className="rounded border-4 border-double border-primary bg-white">
      <div
        className=" h-0.5 rounded border-none bg-primary"
        style={{ width: `${props.percentage}%` }}
      ></div>
    </div>
  )
}

export default PercentageBar
