import React, { FC } from "react"
import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import { Company } from "../../../../../validations"
import { field } from "../../../../../../../infrastructure/utils/field"
import { RadioGroup } from "@headlessui/react"
import { CalendarDaysIcon, CheckIcon, MapPinIcon } from "@heroicons/react/24/solid"
import style from './style'


type CompanyRadioProps = {
  name: string,
  formik: FormikProps
  companies: Company[]
}

const CompanyRadio: FC<CompanyRadioProps> = ({ formik, name, companies}) => {
  const [value, error, touched] = field(formik, name)

  return (
    <div css={style.container}>
      <RadioGroup value={value} onChange={(e) => { formik.setFieldValue(name, e)}}>
        <div className="flex">
          {companies.map((company) => (
            <RadioGroup.Option key={company.siret} value={company}>
              <div css={style.option.container} className="border border-neutral-400 ui-checked:border-primary-main ui-checked:border-2">
                <h1 css={style.option.title}> {company.name} </h1>
                <p css={style.option.text}> {company.siret} - {company.naf} </p>

                <div css={style.option.icon.container}>
                  <MapPinIcon css={style.option.icon.self} />
                  <p css={style.option.icon.text}> {company.address} </p>
                </div>

                <div css={style.option.icon.container}>
                  <CalendarDaysIcon css={style.option.icon.self}/>
                  <p css={style.option.icon.text}> {company.date} </p>
                </div>

                <CheckIcon css={style.option.checkIcon} className="hidden ui-checked:block" />
              </div>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}


export default CompanyRadio
