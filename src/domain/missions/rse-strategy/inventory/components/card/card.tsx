import { Menu } from '@headlessui/react'
import { Action } from "../../validations"
import React, {FC} from 'react'
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { $delete, $update } from "../../../../../../infrastructure/utils/array"

type CardProps = {
  action: Action,
  index: number,
  formik: FormikProps
}

const mapper = (v: string) => {
  if (v === 'gouvernance') return 'Gouvernance';
  if (v === 'laws') return "Droits de l'homme";
  if (v === 'work') return 'Relation et condition de travail';
  if (v === 'environment') return 'Environnement';
  if (v === 'loyalty') return 'Loyautes des pratiques';
  if (v === 'consumer') return 'Question relatives aux consommateurs';
  if (v === 'community') return 'Communautes et developpement local';

  return v
}
const Card: FC<CardProps> = ({ action, index, formik}) => {
  const selected_value = formik.values.inventory[index].type

  return (
    <Menu as='div' className="relative  w-full mb-[32px]">
      <Menu.Button className="w-full">
        <div className="w-full">
          <div className="text-neutral-800 text-[18px] bg-neutral-100 rounded-xl border border-neutral-400 w-full py-[12px] text-left pl-[16px]">{action.name}</div>
          <p className="float-right text-neutral-600 mt-[4px] italic">{mapper(selected_value)}</p>
        </div>

      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-[4px] bg-neutral-100 rounded-xl z-50 border border-neutral-400">
        <div className="m-[12px] px-[10px] rounded-xl cursor-pointer">
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'gouvernance'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'gouvernance' ? 'font-bold' : ''}`}>Gouvernance</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'laws'})))}}>
              <p className={`mb-[6px]  text-[16px] text-neutral-800 ${selected_value === 'laws' ? 'font-bold' : ''}`}>Droits de l'Homme</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'work'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'work' ? 'font-bold' : ''}`}>Relation et condition de travail</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'environment'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'environment' ? 'font-bold' : ''}`}>Environnement</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'loyalty'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'loyalty' ? 'font-bold' : ''}`}>Loyautes des pratiques</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'consumer'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'consumer' ? 'font-bold' : ''}`}>Question relatives aux consommateurs</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex  items-center" onClick={() => { formik.setFieldValue('inventory', $update(formik.values.inventory, index, (a: object) => ({...a, type: 'community'})))}}>
              <p className={`mb-[6px] text-[16px] text-neutral-800 ${selected_value === 'community' ? 'font-bold' : ''}`}>Communautes et developpement local</p>
            </div>
          </Menu.Item>
          <div className="w-full h-[1px] bg-neutral-400 mt-[12px] mb-[12px]"/>
          <Menu.Item>
              <div className="flex justify-center items-center" onClick={() => { formik.setFieldValue('inventory', $delete(formik.values.inventory, index))}}>
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
