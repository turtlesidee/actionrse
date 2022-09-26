import {useFormik} from "formik";
import {CheckboxField} from "../../fields/Checkbox";
import {TextAreaField} from "../../fields/TextAreaField";


export function Strategy({ nextPage }) {
  const formik = useFormik({
    initialValues: {
      ca: false,
      stab: false,
      visi: false,
      image: false,
      new_market: false,
      values: ''
    },
    onSubmit: (values) => { nextPage()}
  })
  return (
    <div className="w-full m-auto  mb-16">
      <h1 className="font-montserrat text-2xl uppercase text-center text-dark-liver mt-8 mb-16"> La stratégie de l'entreprise </h1>
      <form  onSubmit={(e) => {e.preventDefault(); formik.submitForm()}}>
        <TextAreaField label="" id="values" name="values" onChange={formik.handleChange} value={formik.values.values} error={formik.errors.values} touched={formik.touched.values}  />
        <div className="flex ml-4 justify-center items-center">
          <div className="w-1/2">
            <CheckboxField label="Augmenter chiffre d'affaire" id="ca" name="ca" onChange={formik.handleChange} value={formik.values.ca} error={formik.errors.ca} touched={formik.touched.ca} />
          </div>
          <div className="w-1/2">
            <CheckboxField label="Prendre des nouvelles part de marché" id="new_market" name="new_market" onChange={formik.handleChange} value={formik.values.new_market} error={formik.errors.new_market} touched={formik.touched.new_market} />
          </div>

        </div>
        <div className="flex ml-4">
          <div className="w-1/3">
            <CheckboxField label="Améliorer son image" id="image" name="image" onChange={formik.handleChange} value={formik.values.image} error={formik.errors.image} touched={formik.touched.image} />
          </div>
          <div className="w-1/3">
            <CheckboxField label="Stabiliser le chiffre d'affaire" id="stab" name="stab" onChange={formik.handleChange} value={formik.values.stab} error={formik.errors.stab} touched={formik.touched.stab} />
          </div>
          <div className="w-1/3">
            <CheckboxField label="Gagner en visibilité" id="visi" name="visi" onChange={formik.handleChange} value={formik.values.visi} error={formik.errors.visi} touched={formik.touched.visi} />
          </div>
        </div>
        <button type="submit" className="p-2 pl-3 pr-3 cursor-pointer hover:bg-dark-liver bg-green-sheen text-white rounded mt-8 float-right"> Suivant </button>

      </form>
    </div>
  )
}
