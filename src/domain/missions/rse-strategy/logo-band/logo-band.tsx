
import React from "react"
import { useRecoilState } from "recoil"
import { mission_state_atom } from "../logic"

const LogoBand = () => {
  const [mission_state] = useRecoilState(mission_state_atom)
  return (
    <>
    <h1 className="text-center text-[32px] mt-[12px] font-light text-neutral-800"> {mission_state.company.name}</h1>
    <div className="flex justify-center mt-[32px]">
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 1 ? '' : 'opacity-10 '}`} src="/images/poing.svg" alt="poing" />
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 2 ? '' : 'opacity-10 '}`} src="/images/inventory.svg" alt="poing" />
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 3 ? '' : 'opacity-10 '}`} src="/images/evaluation.svg" alt="poing" />
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 4 ? '' : 'opacity-10 '}`} src="/images/resultats.svg" alt="poing" />
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 5 ? '' : 'opacity-10 '}`} src="/images/networking.svg" alt="poing" />
      <img className={`w-[35px] h-[35px] mr-[30px] ${mission_state.step === 6 ? '' : 'opacity-10 '}`} src="/images/influence.svg" alt="poing" />
    </div>
    </>
  )
}

export default LogoBand
