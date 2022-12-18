import db from 'db'
import { v4 as uuid } from 'uuid'
import { Motive, Strategy } from "../../domain/missions/rse-strategy/identification-of-motivation/validations"

import { Action } from "../../domain/missions/rse-strategy/inventory/validations"
import { Answer } from "../../domain/missions/rse-strategy/maturity-assessment"
import { Stakeholder } from "../../domain/missions/rse-strategy/stakeholder/validations"
const create_rse_mission = async (company_id: number) => {
  await db.mission.create({
    data: {
      type: 'RSE',
      companyId: company_id,
      public: uuid()
    },
    select: { id: true }
  })
}

const list_rse_mission = async () => {
  return await db.mission.findMany({
    where: {
      type: 'RSE'
    },
    select: {
      id: true,
      public: true,
      status: true,
      step: true,
      company: {
        select: {
          name: true
        }
      }
    }
  })
}

const list_stakeholders = async (mission_id: number) => {
  return await db.rseStakeholder.findMany({
    where: {
      missionId: mission_id
    },
    select: {
      id: true,
      name: true,
      email: true,
      importance: true,
      support: true,
      influence: true,

    }
  })
}

const get_matrix_data = async (mission_id: number) => {
  const company_quizz_data = await db.rseQuizz.findMany({
    where: {
      missionId: mission_id
    },
    select: {
      value: true,
      question: {
        select: {
          id: true,
          type: true,
          subtype: true
        }
      }
    }
  })

  const stakeholders_quizz_data = await db.rseQuizzStakeholder.findMany({
    where: {
      missionId: mission_id
    },
    select: {
      value: true,
      question: {
        select: {
          id: true,
          type: true,
          subtype: true
        }
      },
      stakeholder: {
        select: {
          id: true,
          name: true
        }
      }
    }
  })

  return [company_quizz_data || [], stakeholders_quizz_data || []]
}

const list_stakeholder_choosen = async (mission_id: number) => {
  return await db.rseStakeholderChoosen.findMany({
    where: {
      missionId: mission_id
    },
    select: {
      missionId: true,
      public_id: true,
      status: true,
      stakeholder: {
        select: {
          name: true,
          state: true,
        }
      }
    }
  })
}
const list_question_assessment = async () => {
  return await db.rseMaturityAssessmentQuestion.findMany({
    select: {
      id: true,
      label: true,
      responseA: true,
      responseB: true,
      responseC: true,
      responseD: true,
      valueA: true,
      valueB: true,
      valueC: true,
      valueD: true,
      type: true
    }
  })
}

const list_question_quizz = async (types: string[]) => {
  return await db.rseQuizzQuestion.findMany({
    select: {
      id: true,
      label: true,
      responseA: true,
      responseB: true,
      responseC: true,
      responseD: true,
      valueA: true,
      valueB: true,
      valueC: true,
      valueD: true,
      type: true,
      subtype: true
    },
    where: {
      type: {
        in: types
      }
    }
  })
}


const create_identification = async (mission_id: number, motives: Motive[], strategies: Strategy[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseIdentification.createMany({
      data: motives.map((motive) => ({ value: motive.name, missionId: mission_id, type: 'MOTIVE' }))
    })
    await tx.rseIdentification.createMany({
      data: strategies.map((strategy) => ({ value: strategy.name, missionId: mission_id, type: 'STRATEGY' }))
    })
    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 2 }
    })
  })
}

const create_inventory = async (mission_id: number, actions: Action[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseInventory.createMany({
      data: actions.map((inv) => ({ value: inv.name, missionId: mission_id, type: inv.type }))
    })

    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 3 }
    })
  })
}

const create_maturity_assessment = async (mission_id: number, answers: Answer[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseMaturityAssessment.createMany({
      data: answers.map((answer) => ({ questionId: answer.id , missionId: mission_id, value: answer.value, type: answer.type }))
    })

    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 4 }
    })
  })
}

const create_company_quizz = async (mission_id: number, answers: Answer[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseQuizz.createMany({
      data: answers.map((answer) => ({ questionId: answer.id , missionId: mission_id, value: answer.value, type: answer.type }))
    })

    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 8}
    })
  })
}

const create_stakeholders_quizz = async (mission_id: number, public_id: string, answers: Answer[]) => {
  return await db.$transaction(async (tx) => {

    const stakeholder_id = await tx.rseStakeholderChoosen.findFirst({
      where: {
        public_id: public_id
      },
      select: {
        stakeholderId: true
      }
    })

    if (stakeholder_id) {
      await tx.rseQuizzStakeholder.createMany({
        data: answers.map((answer) => ({
          questionId: answer.id,
          missionId: mission_id,
          value: answer.value,
          type: answer.type,
          stakeholderId: stakeholder_id.stakeholderId
        }))
      })

      await tx.rseStakeholderChoosen.update({
        where: {
          missionId_stakeholderId: {
            missionId: mission_id,
            stakeholderId: stakeholder_id.stakeholderId
          }
        },
        data: {
          status: 'DONE'
        }
      })

    } else {
      throw new Error('Stakeholder not found')
    }
  })
}
const create_stakeholders = async (mission_id: number, stakeholders: Stakeholder[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseStakeholder.createMany({
      data: stakeholders.map((stake) => ({ name: stake.name, missionId: mission_id, email: stake.email, importance: stake.importance, support: stake.support, influence: stake.influence, state: stake.state  }))
    })

    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 6 }
    })
  })
}

const choose_stakeholders = async (mission_id: number, stakeholder_ids: number[]) => {
  return await db.$transaction(async (tx) => {
    await tx.rseStakeholderChoosen.createMany({
      data: stakeholder_ids.map((stake_id) => ({ stakeholderId: stake_id, missionId: mission_id, public_id: uuid(), status: 'PENDING' }))
    })

    await tx.mission.update({
      where: { id: mission_id },
      data: { step: 7 }
    })
  })

}
const rse_mission_repository = {
  create_rse_mission,
  list_rse_mission,
  create_identification,
  create_inventory,
  list_question_assessment,
  create_maturity_assessment,
  create_stakeholders,
  list_stakeholders,
  choose_stakeholders,
  list_question_quizz,
  create_company_quizz,
  create_stakeholders_quizz,
  list_stakeholder_choosen,
  get_matrix_data
}

export default rse_mission_repository
