'use client'
import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1511613022134-eb3d095e6869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        }}
      >
        <div
          className="h-full w-full flex-1 flex flex-col items-center justify-center text-white"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Fade left cascade>
            <div className="flex flex-col gap[10px] items-center">
              <span className="font-bold text-2xl">PERSON NAME</span>
              <span className="font-bold text-xl">PERSON TITLE</span>
            </div>
          </Fade>
        </div>
      </main>
      <main className="min-h-screen w-full flex flex-col items-center justify-center">
        <div>
          <div>Image Here</div>
          <div>
            <Fade left>Loream Ipsum</Fade>
            <span>Loreal imsum</span>
            <span>small line</span>
            <span>our process</span>
            <span>Visit Portfolio link</span>
          </div>
        </div>
      </main>
      <main className="min-h-screen w-full flex flex-col items-center justify-center">
        <Fade left>Loream Ipsum</Fade>
      </main>
    </>
  )
}
