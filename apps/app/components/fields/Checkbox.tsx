

type InputProps = {
  label: string,
  id: string,
  name: string,
  onChange: any,
  value: any,
  error?: any,
  touched?: any
}
export const CheckboxField = ({ id, label, name, onChange, value, error, touched }: InputProps) => {

  return (
    <div className="mt-4 flex">
      <p className="text-md font-montserrat uppercase text-dark-gray mr-4">{label}</p>
      <input type='checkbox' className="font-montserrat text-md" id={id} name={name} onChange={onChange} value={value}/>
      {touched && error ? <p className='text-red-400 font-montserrat text-sm italic mt-2'> {error} </p> : null}
    </div>
  )
}
