import React, { FC } from 'react';
import tw from "twin.macro"

type ButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset',
  className?: string,
  cb?: () => void
}

const style = {
  button: tw`bg-neutral-800 hover:bg-neutral-600 text-white font-bold py-3 px-10 rounded whitespace-nowrap`
}
const Button: FC<ButtonProps> = ({ label, type , className, cb}) => {
  return (
    <button
      css={style.button}
      className={className}
      type={type}
      onClick={cb}
    >
      {label}
    </button>
  )
}

export default Button
