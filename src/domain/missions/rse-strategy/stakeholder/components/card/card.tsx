import { Menu } from '@headlessui/react'
import { Stakeholder } from "../../validations"
import React, {FC} from 'react'
import { TrashIcon} from "@heroicons/react/24/outline"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { $delete } from "../../../../../../infrastructure/utils/array"

type CardProps = {
  stakeholder: Stakeholder,
  index: number,
  formik: FormikProps
}

const Card: FC<CardProps> = ({ stakeholder, index, formik}) => {
  return (
    <Menu as='div' className="relative inline-block w-full mb-[12px]">
      <Menu.Button className="w-full h-[100px] bg-neutral-100 rounded-xl border border-neutral-400 flex items-center">
        <p className="text-neutral-800 font-bold text-[28px] ml-[32px]">{stakeholder.name}</p>
        <p className="text-neutral-800 font-light text-[18px] ml-[32px]">{stakeholder.state}e</p>
        <div className="ml-auto flex mr-[32px]">
          <div className="flex items-center mr-[32px]">
            <img className="w-[31px] h-[31px] mr-[12px]" src="/images/star.svg" />
            <p className="text-[31px] font-bold text-neutral-800">{Math.round(stakeholder.importance / 10)}</p>
          </div>
          <div className="flex items-center mr-[32px] ">
            <img className="w-[31px] h-[31px] mr-[12px]" src="/images/infl.svg" />
            <p className="text-[31px] font-bold text-neutral-800">{Math.round(stakeholder.influence / 10)}</p>
          </div>
          <div className="flex items-center">
            <img className="w-[31px] h-[31px] mr-[12px]" src="/images/support.svg" />
            <p className="text-[31px] font-bold text-neutral-800">{Math.round(stakeholder.support / 10)}</p>
          </div>
        </div>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-[4px] bg-neutral-100 rounded-xl z-50 border border-neutral-400">
        <div className="m-[12px] px-[10px] rounded-xl cursor-pointer">
          <Menu.Item>
              <div className="flex justify-center items-center" onClick={() => { formik.setFieldValue('stakeholders', $delete(formik.values.stakeholders, index))}}>
                <TrashIcon className="w-[18px] h-[18px] mr-[12px] text-neutral-800" />
                <p className="text-[16px] text-neutral-800">Supprimer</p>
              </div>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default Card
