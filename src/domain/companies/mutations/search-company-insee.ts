import { resolver } from '@blitzjs/rpc'
import axios from "axios"
import {
  search_insee_company,
  SearchInseeCompanyResponse
} from "../validations/muts/search-company-insee-validation"

const token = '96394be3-110d-3f08-ae03-ae050fb357fe'

const formatDate = (date) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
export default resolver.pipe(resolver.zod(search_insee_company), async ({ company_name }, ctx): Promise<SearchInseeCompanyResponse> => {
  try {
    const request = await axios.request({
      method: 'GET',
      url: `https://api.insee.fr/entreprises/sirene/V3/siret?q=denominationUniteLegale:"${company_name.toLowerCase()}"`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })

    if (request.data.etablissements.length > 0) {
      return request.data.etablissements.map(c => ({
        siret: c.siret,
        name: c.uniteLegale.denominationUniteLegale,
        naf: c.uniteLegale.activitePrincipaleUniteLegale,
        date: formatDate(c.uniteLegale.dateCreationUniteLegale),
        address: `${c.adresseEtablissement.complementAdresseEtablissement || c.adresseEtablissement.numeroVoieEtablissement} ${c.adresseEtablissement.typeVoieEtablissement} ${c.adresseEtablissement.libelleVoieEtablissement} ${c.adresseEtablissement.codePostalEtablissement} ${c.adresseEtablissement.libelleCommuneEtablissement}`,
      }))
    } else {
      return []
    }

  } catch (error) {
    return []
  }
})
