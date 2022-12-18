import React, { FC, useState } from "react"
import { useMutation } from "@blitzjs/rpc"
import debounce from "lodash.debounce"
import search_company from "../../../../mutations/search-company"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"

type SearchCompanyProps = {
  selected: string,
  formik: FormikProps
}
const SearchCompany: FC<SearchCompanyProps> = ({ selected, formik }) => {
  const [search] = useMutation(search_company)
  const [companies, setCompanies] = useState([] as any)

  const handleSearch = debounce(async (e) => {
    try {
      const companies = await search({name: e.target.value })
      setCompanies(companies)
    } catch(e) {
      formik.setFieldValue('id', '')
      setCompanies([])
    }

  }, 200)

  return (
    <div className="px-[12px] mt-[30px]">
      <input
        type='text'
        onChange={(e) => handleSearch(e) }
        className="w-full h-[50px] m-auto pl-2 rounded-lg bg-neutral-100 border border-neutral-400 focus:border-neutral-500 text-neutral-600 appearance-none outline-none"
      />
      <div className="mt-[10px] overflow-y-scroll">
        {companies.map((company) => (
          <div
            key={company.id}
            className={` flex items-center cursor-pointer text-[18px] my-[10px] p-[26px] rounded-3xl ${company.id === selected ? 'bg-primary-main text-neutral-100' : ''}`}
            onClick={() => {formik.setFieldValue('id', company.id)}}
          >
            <span className={`text-[32px] font-bold text-neutral-800 ${company.id === selected ? 'text-neutral-100' : ''}`}>{company.name}</span>
            <span className={`text-[22px] font-semibold text-neutral-700 ml-auto ${company.id === selected ? 'text-neutral-100' : ''}`}>{company.users.filter(u => u.user.role === 'LEADER').map(u => `${u.user.lastname} ${u.user.firstname}`)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchCompany
