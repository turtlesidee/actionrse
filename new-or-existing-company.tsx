
const NewOrExistingCompany = () => {
  return (
    <div className="flex mt-10">
      <div className="w-1/2 m-auto text-center border-r border-neutral-400 pt-20 pb-20 hover:bg-neutral-300 cursor-pointer">
        <img className="w-[200px] h-[200px] m-auto" src="images/plant.svg" />
        <p className="text-neutral-600 font-bold text-[32px] mt-[15px]">Nouveau client</p>

      </div>
      <div className="w-1/2 m-auto text-center pt-20 pb-20 hover:bg-neutral-300 cursor-pointer">
        <img className="w-[200px] h-[200px] m-auto" src="images/tree.svg" />
        <p className="text-neutral-600 font-bold text-[32px] mt-[15px]"> Deja client</p>
      </div>
    </div>
  )
}

export default NewOrExistingCompany
