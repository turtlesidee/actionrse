import { useRecoilState } from "recoil"
import { add_strategy_form_open } from "../add-strategy/logic"


const ButtonAddStrategy = () => {
  const [_, setOpen] = useRecoilState(add_strategy_form_open)
  return (
    <div
      className="text-neutral-800 flex items-center justify-center rounded-full text-[18px] font-medium cursor-pointer hover:underline m-auto mt-[50px] mb-[50px]"
  onClick={() => setOpen(true)}
>
  Ajouter une stratégie
    </div>
)
}

export default ButtonAddStrategy
