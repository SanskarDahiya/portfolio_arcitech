/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/helper/Button'
import TextCounter from '@/components/helper/TextCounter'
import { getImageUri } from '@/constants/sample_images'
import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Home() {
  return (
    <div className="w-[calc(100% - 60px)] ml-[60px]">
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
              <div className="font-bold text-2xl">PERSON NAME</div>
              <div className="font-bold text-xl">PERSON TITLE</div>
            </div>
          </Fade>
        </div>
      </main>
      <main className="w-full flex flex-col items-center justify-center my-1">
        <div className="flex w-full min-h-[550px]">
          <div className="flex w-full max-w-[40%] border border-black items-center justify-center">
            <div>Image Here</div>
          </div>
          <div className="pl-12 w-full flex flex-col justify-evenly pb-12 relative">
            <Fade left>
              <div className="text-3xl">
                WELCOME --- <span className="">--- ---</span>
              </div>
            </Fade>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel leo volutpat, iaculis ligula non, pharetra enim. Integer
              mollis sed libero et imperdiet. Fusce in mattis odio, ut tempor
              enim. Vivamus aliquam tellus eget sollicitudin interdum. Nulla
              risus nulla, aliquam sit amet pretium in, rutrum ut felis. Integer
              eget neque at odio rutrum mollis. Praesent rhoncus suscipit massa,
              vitae lobortis nisi tincidunt id. Integer luctus neque nec
              tincidunt dapibus. Ut sollicitudin elit at malesuada posuere. In
              nec maximus tellus.
            </div>
            <div className="border-b-8 border-black max-w-[25%]"></div>
            <div>
              <div>Our process</div>
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[1px]">
                  <span className="inline-block w-[20px] border-b border-black"></span>
                  <span className="inline-block w-[20px] border-b border-black"></span>
                  <span className="inline-block w-[20px] border-b border-black"></span>
                </div>
                <span className="">Our process</span>
                <div className="flex items-center gap-[1px]">
                  <span className="inline-block w-[20px] border-b border-black"></span>
                  <span className="inline-block w-[20px] border-b border-black"></span>
                  <span className="inline-block w-[20px] border-b border-black"></span>
                </div>
                <span className="">Our process</span>
              </div>
            </div>
            <div>
              <Button>Visit Portfolio link</Button>
            </div>
          </div>
        </div>
      </main>
      <main className="w-full flex items-center justify-around bg-black text-white min-h-[200px]">
        <div className="flex justify-between flex-col py-[5%] gap-[20px]">
          <Fade bottom>
            <span className="text-3xl font-200">Some Interesting</span>
          </Fade>
          <div className="flex items-center">
            <span className="inline-block w-[20px] border-b-4 border-white"></span>
            <span className="inline-block w-[20px] border-b-4 border-white"></span>
            <span className="inline-block w-[20px] border-b-4 border-white"></span>
          </div>
          <Fade bottom>
            <span className="text-4xl font-bold">Facts</span>
          </Fade>
        </div>
        {[
          { title: 'Projects', count: 10 },
          { title: 'Customers', count: 20 },
          { title: 'Working Time', count: 30 },
        ].map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div className="relative flex flex-col">
                <span className="font-mono text-4xl font-bold">
                  <TextCounter count={item.count} />
                </span>
                <span className="ml-[20px]">{item.title}</span>
              </div>
            </React.Fragment>
          )
        })}
      </main>
      <main className="w-full min-h-[500px] mt-[50px] px-[20px]">
        <div className="w-full mb-[20px]">
          <div className=" text-end">
            <Fade top>
              <div>
                <span className="text-3xl font-200">FEATURE PROJECTS</span>
                <div className="text-end">
                  <span className="inline-block w-[20px] border-b-[6px] border-black"></span>
                  <span className="inline-block w-[20px] border-b-[6px] border-black"></span>
                  <span className="inline-block w-[20px] border-b-[6px] border-black"></span>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div>
          {[1, 2, 3, 4].map((item, key) => {
            return (
              <React.Fragment key={key}>
                <div
                  className="relative w-full md:w-[75%] my-14 flex flex-col gap-[10px] max-w-[75%]"
                  style={{
                    marginLeft: key % 2 === 0 ? 'initial' : 'auto',
                  }}
                >
                  <div className="min-h-[200px] ">
                    <div className="relative max-h-[75vh] overflow-hidden">
                      <div
                        className="opacity-60"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.6)',
                        }}
                      >
                        <img
                          className="min-w-[75%] min-h-[75vh] overflow-hidden"
                          src={getImageUri(key)}
                          alt="SampleImage"
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className="font-bold absolute bottom-[20%] right-4 text-2xl">
                        <Fade right>THE HOVER HOUSE</Fade>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block border font-semibold border-black opacity-60 rounded-xl px-1 py-0.5 text-[12px]">
                      Living Room
                    </span>
                  </div>
                  <div className="text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vel leo volutpat, iaculis ligula non, pharetra
                    enim. Integer mollis sed libero et imperdiet. Fusce in
                    mattis odio,
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex items-center justify-center mt-[20px]">
          <Button>View More Projects</Button>
        </div>
      </main>
      <main className="min-h-screen opacity-50 bg-grey-100 w-full border-2 border-grey flex flex-col items-center justify-center">
        Loream Ipsum
      </main>
    </div>
  )
}
