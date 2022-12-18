import { useRecoilState } from "recoil"

import { add_action_form_open } from "../add-action/logic"

const ButtonAddAction = () => {
  const [_, setOpen] = useRecoilState(add_action_form_open)
  return (
    <div
      className="bg-neutral-800 w-[75px] h-[75px] text-neutral-100 flex items-center justify-center rounded-full text-[24px] font-black cursor-pointer hover:bg-neutral-700 m-auto mt-[50px] mb-[50px]"
  onClick={() => setOpen(true)}
>
  +
    </div>
)
}

export default ButtonAddAction
