import Header from "./components/header/header"
import { useQuery } from "@blitzjs/rpc"
import list_stakeholder_choosen from '../queries/list-stakeholder-choosen'
import Card from "./components/Card"
import Button from "../../../../infrastructure/components/inputs/button"
type StakeholderDashboardProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const StakeholderDashboard = (props: StakeholderDashboardProps) => {

  const [stakeholders] = useQuery(list_stakeholder_choosen, props.mission_id)


  return (
    <div>
      <Header />
      { stakeholders.map(stake => <Card stakeholder={stake} />) }
      {
        stakeholders.every(stake => stake.status === 'DONE') &&
      <div className="flex justify-center mt-[32px]">
        <Button label='Suivant' cb={() => { props.update_mission_step(9)} }/>
      </div> }
    </div>
  )
}

export default StakeholderDashboard
