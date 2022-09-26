

type TextAreaFieldProps = {
  label: string,
  id: string,
  name: string,
  onChange: any,
  value: any,
  error?: any,
  touched?: any
}
export const TextAreaField = ({ id, label, name, onChange, value, error, touched }: TextAreaFieldProps) => {

  return (
  <div className="mt-8">
    <p className="text-md font-montserrat uppercase text-dark-gray font-semibold">{label}</p>
    <textarea className="border p-3 w-full font-montserrat text-md"  id={id} name={name} onChange={onChange} value={value}/>
    {touched && error ? <p className='text-red-400 font-montserrat text-sm italic mt-2'> {error} </p> : null}
  </div>
  )
    }
