import {useFormik} from "formik";
import {QuestionField} from "../../fields/QuestionField";
import {questions} from "./listQuestion";

export function Inventory({ nextPage }) {
  const formik = useFormik({
  initialValues: {
    q: [],
  },
  onSubmit: (values) => { nextPage()}
})
return (
  <div className="w-full m-auto  mb-16">
    <h1 className="font-montserrat text-2xl uppercase text-center text-dark-liver mt-8 mb-16"> État des lieux </h1>
    <form  onSubmit={(e) => {e.preventDefault(); formik.submitForm()}}>
      {questions.map((q,i) => <QuestionField key={i} label={q} id={`q[${i}]`} name={`q[${i}]`}  onChange={formik.handleChange} value={formik.values.q[i]} />
      )}

      <button type="submit" className="mb-8 p-2 pl-3 pr-3 cursor-pointer hover:bg-dark-liver bg-green-sheen text-white rounded mt-8 float-right"> Suivant </button>
    </form>
  </div>
)
}
