'use client'
import { TABS } from '@/constants/tabs'
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

const TabCss =
  'hover-line px-4 py-4 md:py-2 no-underline relative block md:min-h-0 min-h-[20px] md:min-w-0 min-w-[120px]'

const SubTabSection = ({ fadeProps }: any) => {
  return (
    <React.Fragment>
      {TABS.map(({ title, link }, _) => (
        <React.Fragment key={_}>
          <a className={'white-text no-transform'} href={link}>
            <Fade {...fadeProps}>
              <div className={TabCss}>{title}</div>
            </Fade>
          </a>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

const TopNavBar = () => {
  const [isNavBarOpened, setNavBarStatus] = useState(false)
  return (
    // <div className="bg-black fixed top-0 h-[70px] w-[75%] left-[64px] flex items-center justify-between overflow-hidden">
    <div className="bg-black h-full w-[75%] flex items-center justify-between relative">
      <div className="white-text no-transform flex-1">NAME TAG</div>
      {/* Mobile Section Bars */}
      <div className="absolute md:hidden z-10 right-3">
        <label htmlFor="check" id="hamburger_wrapper">
          <input
            type="checkbox"
            id="check"
            defaultChecked={isNavBarOpened}
            onChange={(e) => {
              setNavBarStatus(e.target.checked)
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      {/* Web Section Tabs */}
      <div
        className={
          'hidden md:flex items-center justify-center text-[10px] uppercase bg-black ' +
          ' mr-4 '
        }
      >
        <SubTabSection fadeProps={{}} />
      </div>

      {/* Mobile Section Tabs */}
      <div
        className={
          'absolute md:hidden flex items-center justify-center text-[10px] uppercase bg-black ' +
          ' top-[100%] flex-col right-0 mr-0 ' +
          (isNavBarOpened ? ' z-10 ' : ' z-[-1] ')
        }
      >
        <SubTabSection
          fadeProps={{
            top: true,
            collapse: true,
            when: isNavBarOpened,
          }}
        />
      </div>
    </div>
  )
}

export default TopNavBar
