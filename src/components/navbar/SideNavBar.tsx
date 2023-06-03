import React from 'react'

const LinkIconCss =
  'white-text self-stretch text-center py-4 border border-white mx-1'

const SideNavBar = () => {
  return (
    <div className="bg-black fixed left-0 w-16 h-full flex justify-between items-center flex-col pt-[80px] pb-[20px] gap-[80px]">
      <span className="h-0 w-[70%] -mt-[4px] bg-gray-400 border-gray-400 border-b" />
      <div className="white-text text-vertical flex-1 flex justify-center items-center uppercase text-xs">
        Name
      </div>
      <span className="h-0 w-[70%] -mt-[4px] bg-gray-400 border-gray-400 border-b" />
      <span className="h-0 w-[70%] -mt-[4px] bg-gray-400 border-gray-400 border-b" />
      <div className="flex justify-center items-center flex-col w-full gap-[10px]">
        <div className={LinkIconCss}>1</div>
        <div className={LinkIconCss}>2</div>
        <div className={LinkIconCss}>3</div>
      </div>
    </div>
  )
}

export default SideNavBar
