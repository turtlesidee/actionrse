import { Menu } from '@headlessui/react'

const MissionMenu = () => {
  return (
    <div className="z-50">
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="hover:text-primary-text">Missions</Menu.Button>
          <Menu.Items className="absolute left-0 mt-4 w-[425px] bg-neutral-100">
            <div className="m-[12px] hover:bg-neutral-200 p-[12px] rounded-xl">
              <Menu.Item>
                  <a className="flex" href="/mission/rse_strategy/selection">
                    <img className="w-[66px] h-[66px]" src="/images/environnement.svg" />
                    <div className="ml-[20px] w-[320px]">
                      <h1 className="text-[18px] font-medium text-neutral-800">Mise en place d’une strategie RSE</h1>
                      <p className="text-[12px] text-neutral-500">It is a long established fact that a reader will be distracted by the readable content of a page. </p>
                    </div>
                  </a>
              </Menu.Item>
            </div>
            <div className="m-[22px] mt-[30px] opacity-30 cursor-not-allowed">
              <Menu.Item>
                <a className="flex">
                  <img className="w-[66px] h-[66px]" src="/images/carbone.svg" />
                  <div className="ml-[20px] w-[320px]">
                    <h1 className="text-[18px] font-medium text-neutral-800">Bilan carbone</h1>
                    <p className="text-[12px] text-neutral-500">It is a long established fact that a reader will be distracted by the readable content of a page. </p>
                  </div>
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
    </div>
  )
}

export default MissionMenu
