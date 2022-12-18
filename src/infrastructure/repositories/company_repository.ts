import db from "db"
import { CreateCompany } from "../../domain/companies/validations/muts/create-company-validation"
import { v4 as uuid } from 'uuid';
const create = async (data: CreateCompany) => {
  return await db.$transaction(async (tx) => {
    const id_leader = await tx.user.create({
      data: {
        lastname: data.leader.lastname,
        firstname: data.leader.firstname,
        email: data.leader.email,
        role: "LEADER",
      },
      select: { id: true },
    })

    const id = await tx.company.create({
      data: {
        name: data.company_information.name,
        address: data.company_information.address,
        naf: data.company_information.naf,
        siret: data.company_information.siret,
        createdAt: data.company_information.date,
        users: {
          create: [
            {
              userId: data.expert.id
            },
            {
              userId: data.collaborator.id
            },
            {
              userId: id_leader.id
            }
          ]
        }
      },
      select: {
        id: true,
      }
    })

    return await tx.mission.create({
      data: {
        type: "RSE",
        companyId: id.id,
        public: uuid(),
      },
      select: {
        id: true,
        public: true,
      }
    })
  })
}

const search = async (name: string) => {
  return await db.company.findMany({
    where: {
      name: {
        contains: name
      }
    },
    select: {
      id: true,
      name: true,
      users: {
        select: {
          user: {
            select: {
              firstname: true,
              lastname: true,
              role: true
            },
          }
        }
      }
    }
  })
}

const company_repository = {
  create,
  search
}

export default company_repository
