import Layout from "../../../infrastructure/components/layouts/layout"
import { mission_state_atom } from "../../../domain/missions/rse-strategy/logic"
import { useRecoilState } from "recoil"
import IdentificationOfMotivation from "../../../domain/missions/rse-strategy/identification-of-motivation"
import Inventory from "../../../domain/missions/rse-strategy/inventory"
import MaturityAssessment from "../../../domain/missions/rse-strategy/maturity-assessment"
import MaturityResult from "../../../domain/missions/rse-strategy/maturity-result"
import Stakeholder from "../../../domain/missions/rse-strategy/stakeholder"
import Router from 'next/router'
import { useEffect } from "react"
import SphereOfInfluence from "../../../domain/missions/rse-strategy/sphere-of-influence"
import CompanyQuizz from "../../../domain/missions/rse-strategy/company-quizz"
import StakeholderQuizz from "../../../domain/missions/rse-strategy/stakeholder-quizz"
import StakeholderDashboard from "../../../domain/missions/rse-strategy/stakeholder-dashboard"
import Matrix from "../../../domain/missions/rse-strategy/matrix"

const Index = () => {
  const [mission_state, set_mission_state] = useRecoilState(mission_state_atom)


  useEffect(() => {
    const integrity = async () => {
      if (mission_state.id === 0) {
        await Router.push("/")
      }
    }

    integrity().catch((e) => console.log(e))
  }, [])
  const update_mission_step = (step: number) => {
    set_mission_state({ ...mission_state, step })
  }
  return (
    <Layout>
      { mission_state.step === 1 && <IdentificationOfMotivation mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 2 && <Inventory mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 3 && <MaturityAssessment mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 4 && <MaturityResult mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 5 && <Stakeholder mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 6 && <SphereOfInfluence mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 7 && <CompanyQuizz mission_id={mission_state.id} update_mission_step={update_mission_step} />}
      { mission_state.step === 8 && <StakeholderDashboard mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
      { mission_state.step === 9 && <Matrix mission_id={mission_state.id} update_mission_step={update_mission_step} /> }
    </Layout>
  )
}

export default Index
