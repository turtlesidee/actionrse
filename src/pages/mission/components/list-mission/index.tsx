import Link from "next/link"
import Button from "../../../../infrastructure/components/inputs/button"
import { useQuery } from "@blitzjs/rpc"
import list_missions from "./queries/list_missions"
import { useRecoilState } from "recoil"
import { mission_state_atom } from "../../../../domain/missions/rse-strategy/logic"
import Router from "next/router"
const missions = [
  {
    id: 1,
    name: 'ADTB NETTOYAGE',
    type: 'RSE',
    status: 'definition'
  }
]

const ListMission = () => {
  const [missions] = useQuery(list_missions, null)
  const [mission_state, set_mission_state] = useRecoilState(mission_state_atom)
  console.log(missions)
  return (
    <div>
      <h1 className="text-neutral-800 text-[28px] font-bold text-center mt-[20px] mb-[96px]">Liste des missions</h1>
      { missions.map(mission => (
        <div key={mission.id}>
          <div className="flex items-center border-b border-neutral-400 pb-[32px] pt-[32px]">
            <p className="text-neutral-800 font-medium text-[30px] mr-[48px]"> { mission.company.name }</p>
            <p className="text-neutral-800 font-light "> Mise en place d'une strategie RSE</p>
            <Button label={'Reprendre'} className='ml-auto mr-[12px]' cb={
              async () => {
                 set_mission_state({ id: mission.id, public_id: mission.public, step: mission.step, company: mission.company })
                await Router.push('/mission/rse_strategy')
              }
            }/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListMission
