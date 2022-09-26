type QuestionFieldProps = {
  label: string,
  id: string,
  name: string,
  onChange: any,
  value: any,
  error?: any,
  touched?: any
}
export const QuestionField = ({ id, label, name, onChange, value, error, touched }: QuestionFieldProps) => {

  return (
    <div className="mt-12">
      <p className="text-md font-montserrat uppercase text-dark-gray font-semibold mb-5">{label}</p>
     <div className="flex justify-between ml-12 mr-12">
       <div>
         <label className="font-montserrat  mr-2"> Oui, tout à fait !</label>
         <input type='radio' className="border p-3 font-montserrat text-md"  id={id} name={name} onChange={onChange} value="oui"/>

       </div>
 <div>
   <label className="font-montserrat  mr-2"> Plutôt, oui</label>
   <input type='radio' className="border p-3 font-montserrat text-md"  id={id} name={name} onChange={onChange} value="ouim"/>
 </div>

       <div>
         <label className="font-montserrat  mr-2"> Je ne sais pas</label>
         <input type='radio' className="border p-3 font-montserrat text-md"  id={id} name={name} onChange={onChange} value="idk"/>
       </div>
 <div>
   <label className="font-montserrat  mr-2"> Plutôt, non</label>
   <input type='radio' className="border p-3 font-montserrat text-md"  id={id} name={name} onChange={onChange} value="nonp"/>

 </div>
  <div>
    <label className="font-montserrat  mr-2"> Non, pas du tout !</label>
    <input type='radio' className="border p-3 font-montserrat text-md"  id={id} name={name} onChange={onChange} value="non"/>
  </div>

     </div>
      <div  className="w-full h-[1px] bg-light-gray mt-12"/>
    </div>
  )
}
