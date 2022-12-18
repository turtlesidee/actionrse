import React, {FC } from 'react'
import { RadioGroup } from '@headlessui/react'
type RadioBoxProps = {

}

const RadioBox: FC<RadioBoxProps> = () => {
  return (
    <div>
      <RadioGroup>
        <RadioGroup.Label>Privacy</RadioGroup.Label>

      </RadioGroup>
    </div>
  )
}

export default RadioBox
