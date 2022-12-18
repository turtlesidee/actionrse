import InputBox from "../../../../../../infrastructure/components/inputs/input-box"
import Button from "../../../../../../infrastructure/components/inputs/button"
import React, { FC } from "react"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { useMutation } from "@blitzjs/rpc"
import search_company_insee from "../../../../mutations/search-company-insee"
import { Company } from "../../../../validations"
import { research_insee_click } from "./logic"
import style from './style'
import CompanyRadio from "./company-radio/company-radio"

type ResearchInseeProps = {
  formik: FormikProps
}

const ResearchInsee: FC<ResearchInseeProps> = ({ formik}) => {
  const [search] = useMutation(search_company_insee)
  const [companies, set_companies] = React.useState([] as Company[])
  return (
    <>
      <div css={style.container}>
        <InputBox name="company_name" formik={formik} type='text' label="Denomination sociale"/>
        <Button label='Recherche INSEE' css={style.search_button} type="button" cb={() => research_insee_click(formik, search, set_companies)} />
      </div>
      <CompanyRadio name='company_information' formik={formik} companies={companies} />
    </>
  )
}

export default ResearchInsee
