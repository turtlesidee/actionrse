import React, { FC } from "react"
import Button from "../../../../../infrastructure/components/inputs/button"

type CardProps = {
  stakeholder: {
    missionId: number
    public_id: string
    status: string,
    stakeholder: {
      name: string
      state: string
    }
  }
}


const Card: FC<CardProps> = ({ stakeholder }) => {

  return (
    <div className="w-full h-[100px] bg-neutral-100 rounded-xl border border-neutral-400 flex items-center mb-[16px]">
      <p className="text-neutral-800 font-bold text-[28px] ml-[32px]">{stakeholder.stakeholder.name}</p>
      <p className="text-neutral-800 font-light text-[18px] ml-[32px]">{stakeholder.stakeholder.state}e</p>
      {stakeholder.status !== 'DONE' ? <Button label={"Copier lien"} className="ml-auto mr-[32px]"
        cb={ async () => {
          await navigator.clipboard.writeText(`http://localhost:3000/mission/rse_strategy/stakeholder?mission=${stakeholder.missionId}&demand=${stakeholder.public_id}`)
        }}
        /> :
        <div className="ml-auto mr-[32px]  text-primary-text text-[20px]"> Information recues</div>}

    </div>
  )
}

export default Card
