import { is_error } from "../../../infrastructure/utils/is-error"


export class CompanyAlreadyExists extends Error {
  constructor() {
    super("Company already exists")
    this.name = "CompanyAlreadyExists"
  }
}

export const isCompanyAlreadyExistsError = is_error("CompanyAlreadyExists")
