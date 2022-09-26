import { useState} from "react";

type Company = {
  company_name: string,
  referent_name: string
  referent_email: string
}

const DEFAULT_COMPANY = {
  company_name: '',
  referent_name: '',
  referent_email: '',
} as Company

export enum Page  {
  CREATION_COMPAGNIE = 'creation_compagnie',
  MOTIVATION = 'motivation',
  STRATEGY = 'strategy',
  LIEU = 'lieu',
  RESULT_INVENTORY = 'result_inventory',
  IDENTIFICATION = 'identification',

}
export const useCore = () => {
  const [page, setPage] = useState(Page.CREATION_COMPAGNIE)
  const [company, setCompany] = useState(DEFAULT_COMPANY);


  const createCompany = (company_name, referent_name, referent_email) => setCompany({   company_name,
    referent_name,
    referent_email})

  const changePage = (page: Page) => setPage(page)
  return {
    page,
    createCompany,
    changePage
  }
}
