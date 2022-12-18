import Button from "../../../../../../infrastructure/components/inputs/button"
import React from "react"

type WelcomeProps = {
  startQuestion: () => void,
  selectedTheme: string[]
  setSelectedTheme: (selectedTheme: string[]) => void
}
const Welcome = ({ startQuestion, setSelectedTheme } : WelcomeProps) => {
  const [selected, setSelected] = React.useState([] as string[])

  const laws_selected = selected.includes('laws')
  const work_selected = selected.includes('work')
  const environment_selected = selected.includes('environment')
  const loyalty_selected = selected.includes('loyalty')
  const consumer_selected = selected.includes('consumer')
  const community_selected = selected.includes('community')
  return (
    <div>
      <p className="font-light text-neutral-800 text-center pt-[16px] pb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod nisl, vitae hendrerit magna. Aenean sodales justo nec velit dictum scelerisque. Pellentesque vel bibendum tortor. Suspendisse dapibus mi felis, eu dictum mi posuere et. Donec posuere ac lorem a vestibulum. Phasellus lacus sem, faucibus in leo sit amet, lacinia faucibus orci. Pellentesque odio nunc, sagittis id posuere id, ultrices sit amet ligula. Donec tristique urna lacinia, accumsan tellus porttitor, imperdiet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae orci id nunc fringilla venenatis quis at mi. Morbi mattis luctus ante, id vulputate felis porta sit amet. Integer porttitor sed justo eu elementum.
      </p>
      <div className="text-neutral-800 font-bold text-[32px] mt-[64px]"> Selectionner au moins 1 theme</div>
      <div>
        <div className="flex justify-center mt-[32px]">
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer mr-[48px] ${laws_selected && 'border-4 border-primary-text'}`}
            onClick={() => setSelected(selected.includes('laws') ? selected.filter(theme => theme !== 'laws') : [...selected, 'laws'])}>
            <div>
            <img src='/images/justice.svg' className='w-[120px] h-[120px] m-auto'/>
            <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px]"> Droits de l'homme</p>
            </div>
          </div>
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer mr-[48px] ${work_selected && 'border-4 border-primary-text'}`}
               onClick={() => setSelected(selected.includes('work') ? selected.filter(theme => theme !== 'work') : [...selected, 'work'])}>
            <div>
              <img src='/images/suitcase.svg' className='w-[120px] h-[120px] m-auto'/>
              <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px] px-[16px]"> Relation et condition de travail </p>
            </div>
          </div>
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer ${environment_selected && 'border-4 border-primary-text'}`}
               onClick={() => setSelected(selected.includes('environment') ? selected.filter(theme => theme !== 'environment') : [...selected, 'environment'])}>
            <div>
              <img src='/images/planet-earth.svg' className='w-[120px] h-[120px] m-auto'/>
              <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px]">Environnement</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[24px]">
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer mr-[48px] ${loyalty_selected && 'border-4 border-primary-text'}`}
               onClick={() => setSelected(selected.includes('loyalty') ? selected.filter(theme => theme !== 'loyalty') : [...selected, 'loyalty'])}>
            <div>
              <img src='/images/loyalty.svg' className='w-[120px] h-[120px] m-auto'/>
              <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px]"> Loyautes des pratiques</p>
            </div>
          </div>
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer mr-[48px] ${consumer_selected && 'border-4 border-primary-text'}`}
               onClick={() => setSelected(selected.includes('consumer') ? selected.filter(theme => theme !== 'consumer') : [...selected, 'consumer'])}>
            <div>
              <img src='/images/consumer.svg' className='w-[120px] h-[120px] m-auto'/>
              <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px] px-[16px]"> Questions relatives aux consommateurs </p>
            </div>
          </div>
          <div className={`w-[275px] h-[275px] bg-neutral-100 flex items-center justify-center cursor-pointer ${community_selected && 'border-4 border-primary-text'}`}
               onClick={() => setSelected(selected.includes('community') ? selected.filter(theme => theme !== 'community') : [...selected, 'community'])}>
            <div>
              <img src='/images/unity.svg' className='w-[120px] h-[120px] m-auto'/>
              <p className="text-neutral-800 font-bold text-center text-[22px] mt-[16px]">Communautes et developpement local</p>
            </div>
          </div>
        </div>
      </div>
      {selected.length > 0 &&
      <div className="flex justify-center mt-[64px]">
        <Button label="Commencer l'evaluation" type="button" cb={() => { setSelectedTheme(selected); startQuestion()}}/>
      </div>
      }

    </div>
  )
}

export default Welcome
