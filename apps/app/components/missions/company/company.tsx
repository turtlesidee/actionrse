import {useFormik} from "formik";
import {InputField} from "../../fields/InputField";
import * as Yup from 'yup';

const CompanySchema = Yup.object().shape({
  company_name: Yup.string().required('Requis'),
  referent_name: Yup.string().required('Requis'),
  referent_email: Yup.string().email('Doit être au format e-mail').required('Requis')
})

export const Company = ({ nextPage }) => {
  const formik = useFormik({
    initialValues: {
      company_name: '',
      referent_name: '',
      referent_email: ''
    },
    validationSchema: CompanySchema,
    onSubmit: (values) => { nextPage()}
  })
  return (
  <div className="w-full m-auto mb-16">
    <h1 className="font-montserrat text-2xl uppercase text-center text-dark-liver mt-8 mb-16"> Création de la compagnie </h1>
  <form  onSubmit={(e) => {e.preventDefault(); formik.submitForm()}}>
    <InputField label="Nom de la companie" id="company_name" name="company_name" onChange={formik.handleChange} value={formik.values.company_name} error={formik.errors.company_name} touched={formik.touched.company_name} />
    <div className="flex">
      <div className="w-1/2 mr-2">
        <InputField label="Nom du référent" id="referent_name" name="referent_name" onChange={formik.handleChange} value={formik.values.referent_name} error={formik.errors.referent_name} touched={formik.touched.referent_name} />
      </div>
      <div className="w-1/2 ml-2">
        <InputField label="Email du référent" id="referent_email" name="referent_email" onChange={formik.handleChange} value={formik.values.referent_email} error={formik.errors.referent_email} touched={formik.touched.referent_email} />
      </div>
    </div>
    <button type="submit" className="p-2 pl-3 pr-3 cursor-pointer hover:bg-dark-liver bg-green-sheen text-white rounded mt-8 float-right"> Suivant </button>
  </form>
  </div>
  )
}
