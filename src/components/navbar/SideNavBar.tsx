'use client'

import { TABS } from '@/constants/tabs'
import { usePathname } from 'next/navigation'

import React from 'react'

const LinkIconCss =
  'white-text self-stretch text-center py-4 border border-white mx-1'

const LinkTitleMapping = TABS.reduce((acc, item) => {
  acc[item.link] = item.title
  return acc
}, {} as any)

const SideNavBar = () => {
  const currentPath = usePathname()
  const [prefix, ActualPath] = currentPath.split('/')

  return (
    // <div className="bg-black fixed left-0 w-16 h-full flex justify-between items-center flex-col pt-[70px] pb-[20px] gap-[80px]">
    <div className="flex justify-between items-center flex-col gap-[80px]">
      <span className="h-0 w-[70%] bg-gray-400 border-gray-400 border-b" />
      <div className="white-text text-vertical flex-1 flex justify-center items-center text-xs">
        {LinkTitleMapping[[prefix, ActualPath].join('/')] || 'Home'}
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
