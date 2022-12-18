import Button from "../../../../../../infrastructure/components/inputs/button"

type WelcomeProps = {
  startQuestion: () => void
}
const Welcome = ({ startQuestion } : WelcomeProps) => {

  return (
    <div>
      <p className="font-light text-neutral-800 text-center pt-[16px] pb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod nisl, vitae hendrerit magna. Aenean sodales justo nec velit dictum scelerisque. Pellentesque vel bibendum tortor. Suspendisse dapibus mi felis, eu dictum mi posuere et. Donec posuere ac lorem a vestibulum. Phasellus lacus sem, faucibus in leo sit amet, lacinia faucibus orci. Pellentesque odio nunc, sagittis id posuere id, ultrices sit amet ligula. Donec tristique urna lacinia, accumsan tellus porttitor, imperdiet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae orci id nunc fringilla venenatis quis at mi. Morbi mattis luctus ante, id vulputate felis porta sit amet. Integer porttitor sed justo eu elementum.
      </p>
      <div className="flex justify-center mt-[64px]">
        <Button label="Commencer l'evaluation" type="button" cb={() => {startQuestion()}}/>
      </div>

    </div>
  )
}

export default Welcome
