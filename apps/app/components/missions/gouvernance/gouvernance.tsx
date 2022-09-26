import {useFormik} from "formik";

import {CheckboxField} from "../../fields/Checkbox";
import {TextAreaField} from "../../fields/TextAreaField";

export const Gouvernance = ({ nextPage }) => {
  const formik = useFormik({
    initialValues: {
      comex: false,
      codir: false,
      comop: false,
      values: '',
      missions: '',
      reduce_ges: false,
      valoriser_dechet: false,
      sport: false
    },
    onSubmit: (values) => { nextPage()}
  })
  return (
    <div className="w-full m-auto mb-16">
      <h1 className="font-montserrat text-2xl uppercase text-center text-dark-liver mt-8 mb-16"> Motivation de la gouvernance </h1>
      <form  onSubmit={(e) => {e.preventDefault(); formik.submitForm()}}>
        <h1 className="font-montserrat text-md uppercase text-dark-gray font-semibold"> La compagnie dispose d'un</h1>
        <div className="flex ml-4">
          <div className="w-1/3">
            <CheckboxField label="COMOP" id="comop" name="comop" onChange={formik.handleChange} value={formik.values.comop} error={formik.errors.comop} touched={formik.touched.comop} />
          </div>
          <div className="w-1/3">
          <CheckboxField label="COMEX" id="comex" name="comex" onChange={formik.handleChange} value={formik.values.comex} error={formik.errors.comex} touched={formik.touched.comex} />
          </div>
            <div className="w-1/3">
          <CheckboxField label="CODIR" id="codir" name="codir" onChange={formik.handleChange} value={formik.values.codir} error={formik.errors.codir} touched={formik.touched.codir} />
            </div>
        </div>
        <h1 className="font-montserrat text-md mt-8 uppercase text-dark-gray font-semibold"> La compagnie désire: </h1>
        <div className="flex ml-4">
          <div className="w-1/3">
            <CheckboxField label="Réduire son empreinte carbone" id="reduce_ges" name="reduce_ges" onChange={formik.handleChange} value={formik.values.reduce_ges} error={formik.errors.reduce_ges} touched={formik.touched.reduce_ges} />
          </div>
          <div className="w-1/3">
            <CheckboxField label="Valoriser ses déchets" id="valoriser_dechet" name="valoriser_dechet" onChange={formik.handleChange} value={formik.values.valoriser_dechet} error={formik.errors.valoriser_dechet} touched={formik.touched.valoriser_dechet} />
          </div>
          <div className="w-1/3">
            <CheckboxField label="Promouvoir le sport en entreprise" id="sport" name="sport" onChange={formik.handleChange} value={formik.values.sport} error={formik.errors.sport} touched={formik.touched.sport} />
          </div>
        </div>
        <TextAreaField label="Les valeurs de l'entreprise" id="values" name="values" onChange={formik.handleChange} value={formik.values.values} error={formik.errors.values} touched={formik.touched.values}  />
        <TextAreaField label="Les missions de l'entreprise" id="missions" name="missions" onChange={formik.handleChange} value={formik.values.missions} error={formik.errors.missions} touched={formik.touched.missions}  />

        <button type="submit" className="mb-8 p-2 pl-3 pr-3 cursor-pointer hover:bg-dark-liver bg-green-sheen text-white rounded mt-8 float-right"> Suivant </button>
      </form>
    </div>
  )
}
