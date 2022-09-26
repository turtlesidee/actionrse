

type InputProps = {
  label: string,
  id: string,
  name: string,
  onChange: any,
  value: any,
  error?: any,
  touched?: any
}
export const InputField = ({ id, label, name, onChange, value, error, touched }: InputProps) => {

  return (
  <div className="mt-4">
    <p className="text-md font-montserrat uppercase text-dark-gray">{label}</p>
    <input className="border p-3 w-full font-montserrat text-md" type="text" id={id} name={name} onChange={onChange} value={value}/>
    {touched && error ? <p className='text-red-400 font-montserrat text-sm italic mt-2'> {error} </p> : null}
  </div>
  )
    }
