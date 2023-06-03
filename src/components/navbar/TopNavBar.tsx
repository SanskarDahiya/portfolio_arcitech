'use client'
import React from 'react'

const TabCss = 'white-text px-6 py-3 text-[10px]'

const TopNavBar = () => {
  return (
    <div className="bg-black fixed top-0 h-20 w-[75%] left-[64px] flex text-xs items-center">
      <div className={TabCss}>HOME</div>
      <div className={TabCss}>PORTFOLIO</div>
      <div className={TabCss}>VIDEOS</div>
      <div className={TabCss}>SERVICES</div>
      <div className={TabCss}> ABOUT US</div>
      <div className={TabCss}>CONTACT</div>
    </div>
  )
}

export default TopNavBar
