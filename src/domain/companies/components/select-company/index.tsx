import Header from "./components/header/header"
import React from 'react'
import { useFormik } from "formik"
import { initial_values, on_submit, select_company_form } from "./logic"
import { validateSchema } from "../../../../infrastructure/utils/validate-schema-form"
import SearchCompany from "./components/search-company/search-company"
import Button from "../../../../infrastructure/components/inputs/button"
import { useMutation } from "@blitzjs/rpc"
import create_mission_mutation from '../../../missions/rse-strategy/mutations/create-mission'
import { useRecoilState } from "recoil"
import { mission_state_atom } from "../../../missions/rse-strategy/logic"
import { useRouter } from "next/router"
const SelectCompany = () => {

    const router = useRouter();
    const nextPage = async () => {
      await router.push('/mission/rse_strategy')
    }

   const [mission_state, set_mission_state] = useRecoilState(mission_state_atom)
  const [create_mission] = useMutation(create_mission_mutation)
  const formik = useFormik({
    initialValues: initial_values,
    validate: validateSchema(select_company_form),
    onSubmit: on_submit(create_mission, (id, public_id, name) => { set_mission_state({ ...mission_state, id, public_id, company: { name } }) }, nextPage)
  })

  const company_selected = formik.values.id > 0
  return (
    <>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <>
          <SearchCompany selected={formik.values.id} formik={formik} />
          { company_selected && <div className="mt-[75px] flex justify-center mb-[75px]">
            <Button label="Suivant" type="submit" />
          </div>}
        </>
      </form>
    </>
  )
}

export default SelectCompany
