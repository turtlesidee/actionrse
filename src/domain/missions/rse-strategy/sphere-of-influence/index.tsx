import LogoBand from "../logo-band/logo-band"
import Header from "./components/header/header"
import React, { FC } from "react"
import BubbleChart from "./components/bubble-chart/bubble-chart"
import { useMutation, useQuery } from "@blitzjs/rpc"
import list_stakeholders from "../queries/list-stakeholders"
import Button from "../../../../infrastructure/components/inputs/button"
import choose_stakeholder from "../mutations/choose-stakeholder"


type SphereOfInfluenceProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const SphereOfInfluence: FC<SphereOfInfluenceProps> = ({ mission_id, update_mission_step}) => {
  const [chooseStakeholder] = useMutation(choose_stakeholder)
  const [stakeholders] = useQuery(list_stakeholders, mission_id)
  const [selectedStakeholder, setSelectedStakeholder] = React.useState([] as any[])

  return (
    <div>
      <LogoBand />
      <Header />
      <div>
        <h1 className="text-neutral-800 text-[28px] text-center font-medium"> Partie prenante selectionnees  {selectedStakeholder.length} /3</h1>
        <div className="flex justify-center items-center mt-[26px] text-neutral-800 text-[20px] font-light">{ selectedStakeholder.map((stake, i) => <div key={i} className='w-1/3 text-center'> {stake.name}</div>) }</div>
      </div>
      <BubbleChart stakeholders={stakeholders} selectedStakeholder={selectedStakeholder} setSelectedStakeholder={setSelectedStakeholder}/>
      {selectedStakeholder.length === 3 &&
      <div className="flex justify-center mt-[64px]">
        <Button label={'Suivant'}  cb={ async () => {
          await chooseStakeholder({id: mission_id, stakeholder_ids: selectedStakeholder.map(u => u.id)})
          update_mission_step(7)
        }}/>
      </div> }

    </div>
  )
}

export default SphereOfInfluence
