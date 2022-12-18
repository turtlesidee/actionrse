import { Menu } from '@headlessui/react'
import { ChevronDownIcon, ArrowLeftOnRectangleIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import React from "react"


const AvatarMenu = () => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="flex">

          <img src="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" className="rounded-full w-[50px] m-auto" />
          <ChevronDownIcon className="w-[18px] ml-[4px] stroke-neutral-700" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-4 bg-neutral-100 rounded-xl">
          <div className="m-[12px] hover:bg-neutral-200 p-[12px] rounded-xl">
            <Menu.Item>
              <a className="flex items-center opacity-20 cursor-not-allowed" >
                <UserCircleIcon  className="w-[20px] stroke-neutral-800"/>
                <div className="ml-[16px]">
                  <h1 className="text-[15px] font-medium text-neutral-800 whitespace-nowrap">Mon compte</h1>
                </div>
              </a>
            </Menu.Item>
          </div>
            <div className="m-[12px] hover:bg-error-main p-[12px] rounded-xl">
            <Menu.Item>
              <a className="flex items-center" href="/">
                <ArrowLeftOnRectangleIcon  className="w-[20px] stroke-error-text"/>
                <div className="ml-[16px]">
                  <h1 className="text-[15px] font-medium text-error-text whitespace-nowrap">Se deconnecter</h1>
                </div>
              </a>
            </Menu.Item>
          </div>

        </Menu.Items>
      </Menu>
    </div>
  )
}

export default AvatarMenu;
