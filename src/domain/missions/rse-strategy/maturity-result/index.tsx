import Header from "./components/header/header"
import LogoBand from "../logo-band/logo-band"

import BarChart from "./components/charts/bar-chart"
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon} from "@heroicons/react/24/solid"
import Button from "../../../../infrastructure/components/inputs/button"

type MaturityResultProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const MaturityResult = (props: MaturityResultProps) => {

  return (
    <div>
      <LogoBand />
      <Header />
      <div className="pt-[20px]">
        <div className="flex mb-[64px] bg-neutral-100 p-[12px] border border-neutral-400 rounded-2xl">
          <div className="w-1/3 border-r border-neutral-400 text-center text-neutral-800 pt-[30px] pb-[30px]">
            <div className="flex items-center justify-center mb-[12px]">
              <h1 className="font-light text-[18px] mr-[8px]"> POINT FORT</h1>
              <ArrowTrendingUpIcon className="w-[30px] fill-primary-text"/>
            </div>

            <p className="font-bold text-[20px] uppercase"> Question relatives aux consommateurs</p>
          </div>
          <div className="w-1/3 border-r border-neutral-400  text-center text-neutral-800 pt-[30px] pb-[30px]">
            <div className="flex items-center justify-center mb-[12px]">
              <h1 className="font-light text-[18px] mr-[8px]"> GOUVERNANCE</h1>
            </div>
            <p className="font-bold text-[20px]"> TOTALEMENT ENGAGE</p>
          </div>
          <div className="w-1/3 text-center text-neutral-800 pt-[30px] pb-[30px]">
            <div className="flex items-center justify-center mb-[12px]">
              <h1 className="font-light text-[18px] mr-[8px]"> POINT FAIBLE </h1>
              <ArrowTrendingDownIcon className="w-[30px] fill-error-text"/>
            </div>
            <p className="font-bold text-[20px]"> DROITS DE L'HOMME </p>
          </div>
        </div>
        <BarChart />
        <div className="mt-[96px] flex justify-center">
          <Button label={"Suivant"} cb={() => { props.update_mission_step(5)}} />
        </div>

      </div>
    </div>
  )
}

export default MaturityResult
