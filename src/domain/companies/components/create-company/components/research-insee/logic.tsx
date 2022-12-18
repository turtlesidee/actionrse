import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { SearchInseeCompanyFn } from "../../../../validations/muts/search-company-insee-validation"
import { Company } from "../../../../validations"

type UpdateCompanies = (companies: Company[]) => void

export const research_insee_click = async (formik: FormikProps, search: SearchInseeCompanyFn, update_companies: UpdateCompanies ) => {
  const companies = await search({company_name: formik.values.company_name})
  await formik.setFieldValue('company_name', '')
  update_companies(companies)
}
