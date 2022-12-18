import MissionMenu from "./mission-menu"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import AvatarMenu from "./avatar-menu"
const MenuHeader = () => {
  return (
    <div className="w-full bg-neutral-100 h-[100px] flex items-center border-b border-neutral-400">
      <div className=" w-[1024px] m-auto flex items-center">
        <a className="text-38 font-bold" href='/'> <span className="text-neutral-500">ACTION</span><span className="text-primary-main">RSE</span> </a>
        <div className="ml-72 flex items-center">
          <MissionMenu />
        </div>
        <div className="ml-auto flex items-center">
          <AvatarMenu />
        </div>


      </div>

    </div>
  )
}

export default MenuHeader
