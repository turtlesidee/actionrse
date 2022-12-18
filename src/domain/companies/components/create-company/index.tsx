import React from 'react'
import { useFormik } from "formik"
import { create_company_form, initial_values, on_submit } from "./logic"
import { validateSchema } from "../../../../infrastructure/utils/validate-schema-form"
import Header from "./components/header/header"
import ResearchInsee from "./components/research-insee/research-insee"
import UsersForm from "./components/users-form/users-form"
import ButtonForm from "./button-form"
import { useMutation } from "@blitzjs/rpc"
import create_company from "../../mutations/create-company"
import create_mission_mutation  from "../../../missions/rse-strategy/mutations/create-mission"
import { useRecoilState } from "recoil"
import { mission_state_atom } from "../../../missions/rse-strategy/logic"
import { useRouter } from 'next/router'
const CreateCompany = () => {
  const router = useRouter();
  const [create] = useMutation(create_company)

  const [mission_state, set_mission_state] = useRecoilState(mission_state_atom)

  const nextPage = async () => {
    await router.push('/mission/rse_strategy')
  }

  const formik = useFormik({
    initialValues: initial_values,
    validate: validateSchema(create_company_form),
    onSubmit: on_submit(create, (id, public_id, name) => { set_mission_state({ ...mission_state, id, public_id, company: { name } }) }, nextPage)
  })

  return (
    <>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <>
          <ResearchInsee formik={formik} />
          <UsersForm formik={formik} />
          <ButtonForm formik={formik} />
        </>
      </form>
    </>
  )
}

export default CreateCompany
