import { resolver } from "@blitzjs/rpc"
import company_repository from "../../../infrastructure/repositories/company_repository"
import { CompanyAlreadyExists } from "../errors/company-already-exists"
import { create_company, CreateCompanyResponse } from "../validations/muts/create-company-validation"


export default resolver.pipe(resolver.zod(create_company), async (data, ctx): Promise<CreateCompanyResponse> => {
  try {
    return await company_repository.create(data)
  } catch (e) {
    console.log(e)
    if (e.code === "P2002") {
      throw new CompanyAlreadyExists()
    }
  }

});
