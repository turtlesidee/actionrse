import React, { FC, Fragment, useState } from "react"
import tw from 'twin.macro';
import { Listbox, Transition } from "@headlessui/react"
import { FormikValues } from "formik"
import get from 'lodash.get'
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { FormikProps } from "./types"



type SelectBoxProps = {
  name: string,
  options: {value: string, display: string}[],
  formik: FormikProps
  mapper?: (value: string) => string
}


const style = {
  button: {
    main:  [
      tw`w-full h-[50px] m-auto pl-2 rounded-lg bg-neutral-100`,
      tw`border border-neutral-400 focus:border-neutral-500`,
      tw`text-neutral-600`,
      tw`appearance-none outline-none`,
    ],
    text: [tw`block truncate text-gray-600`],
    iconContainer: [tw`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8`],
    icon: [tw`h-5 w-5 text-gray-400`]
  },
  options: [
    tw`absolute max-h-[256px] w-full overflow-auto border-b border-l border-r bg-white text-base focus:outline-none sm:text-sm z-50`,
  ],
  option: {
    main: [
      tw`relative cursor-default select-none py-[8px] pl-[32px] pr-[4px] text-gray-600`,
      tw`ui-active:bg-gray-50 ui-active:text-gray-900`,
    ],
    value:  [
      tw`block truncate`,
      tw`ui-selected:font-medium`
    ],
    iconContainer: [
      tw`absolute inset-y-0 left-0 flex items-center pl-[8px] text-gray-400`
    ],
    icon: [
      tw`h-[20px] w-[20px]`
    ]
  },
}

const SelectBox: FC<SelectBoxProps> = ({ options, name, formik, mapper= (str) => str}) => {
  const path = name.split('.')

  const value = get(formik.values, path)
  const error = get(formik.errors, path)
  const touched = get(formik.touched, path)

  return (
    <div className="w-full relative">
      <Listbox value={value} onChange={(e) => formik.setFieldValue(name, e)} >
        <Listbox.Button css={style.button.main}>
          <span css={style.button.text}>{mapper(value)}</span>
          <span css={style.button.iconContainer}>
              <ChevronUpDownIcon aria-hidden="true" css={style.button.icon}/>
            </span>
        </Listbox.Button>
        <Listbox.Options css={style.options}>
          {options.map((opt) => (
            <Listbox.Option key={opt.value} value={opt.value} as={Fragment}>
              {({ selected, active}) => (
                <li css={style.option.main}>
                  <span css={style.option.value}>
                    {opt.display}
                  </span>
                  {selected ? (
                    <span css={style.option.iconContainer}>
                          <CheckIcon css={style.option.icon} aria-hidden="true" />
                    </span>
                  ) : null}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default SelectBox
