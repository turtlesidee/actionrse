import tw from 'twin.macro'

const style = {
  container: tw`w-full mt-[25px] py-10 overflow-x-scroll`,
  option: {
    container: tw`w-[328px] bg-neutral-100 min-h-[200px] mx-[8px] cursor-pointer  relative`,
    title: tw`text-neutral-800 text-[25px] font-bold ml-[12px] pt-[12px]`,
    text: tw`text-neutral-500 text-[12px] ml-[12px]`,
    icon: {
      container: tw`flex items-center mt-[20px] px-[10px] `,
      self: tw`w-[20px] fill-neutral-800`,
      text: tw`text-neutral-800 text-[14px] ml-[6px]`
    },
    checkIcon: tw`w-[28px] fill-primary-main absolute right-[10px] bottom-[10px]`
  }
}

export default style
