
const NewOrExistingCompany = () => {
  return (
    <div className="flex mt-10">
      <a href="/mission/rse_strategy/new-client" className="w-1/2 m-auto text-center border-r border-neutral-400 pt-20 pb-20 hover:bg-neutral-300 cursor-pointer"
        onClick={() => {}}
      >
        <img className="w-[200px] h-[200px] m-auto" src="/images/plant.svg" />
        <p className="text-neutral-600 font-bold text-[32px] mt-[15px]">Nouveau client</p>

      </a>
      <a href="/mission/rse_strategy/already-client" className="w-1/2 m-auto text-center pt-20 pb-20 hover:bg-neutral-300 cursor-pointer">
        <img className="w-[200px] h-[200px] m-auto" src="/images/tree.svg" />
        <p className="text-neutral-600 font-bold text-[32px] mt-[15px]"> Deja client</p>
      </a>
    </div>
  )
}

export default NewOrExistingCompany
