import LogoBand from "../logo-band/logo-band"
import Header from "./components/header/header"
import React, { FC } from "react"
import BubbleChart from "./components/bubble-chart/bubble-chart"
import { useMutation, useQuery } from "@blitzjs/rpc"
import list_stakeholders from "../queries/list-stakeholders"
import Button from "../../../../infrastructure/components/inputs/button"
import choose_stakeholder from "../mutations/choose-stakeholder"
import getMatrixData from "../queries/get-matrix-data"


type MatrixProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const Matrix: FC<MatrixProps> = ({ mission_id, update_mission_step}) => {
  //const [chooseStakeholder] = useMutation(choose_stakeholder)
  const [data] = useQuery(getMatrixData, mission_id)
  const [selectedDomain, setSelectedDomain] = React.useState([] as any[])

  return (
    <div>
      <LogoBand />
      <Header />

      <BubbleChart datasets={data} selectedStakeholder={selectedDomain} setSelectedStakeholder={setSelectedDomain}/>
      {selectedDomain.length === 3 &&
      <div className="flex justify-center mt-[64px]">
        <Button label={'Suivant'}  cb={ async () => {
          //await chooseStakeholder({id: mission_id, stakeholder_ids: selectedDomain.map(u => u.id)})
          update_mission_step(7)
        }}/>
      </div> }

    </div>
  )
}

export default Matrix
