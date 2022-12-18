import Layout from "../../../infrastructure/components/layouts/layout"
import StakeholderQuizz from "../../../domain/missions/rse-strategy/stakeholder-quizz"
import LayoutNoAuth from "../../../infrastructure/components/layouts/layout-no-auth"

const Stakeholder = () => {

  return (
    <LayoutNoAuth>
      <StakeholderQuizz />
    </LayoutNoAuth>
  )
}

export default Stakeholder
