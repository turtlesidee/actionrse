import { useRecoilState } from "recoil"
import { add_action_form_open } from "../../../inventory/components/add-action/logic"
import { add_motive_form_open } from "../add-motive/logic"


const ButtonAddMotive = () => {
  const [_, setOpen] = useRecoilState(add_motive_form_open)
  return (
    <div
      className="text-neutral-800 flex items-center justify-center rounded-full text-[18px] font-medium cursor-pointer hover:underline m-auto mt-[50px] mb-[50px]"
      onClick={() => setOpen(true)}
    >
      Ajouter une motivation
    </div>
  )
}

export default ButtonAddMotive
