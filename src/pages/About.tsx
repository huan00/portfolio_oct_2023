import React from 'react'
import { backendImage, frontendImage } from '../constants/Skills.ts'

interface Props {
  aboutRef?: React.RefObject<HTMLDivElement>
  scrollToContact: () => void
}

const MySkills = ({ aboutRef, scrollToContact }: Props) => {
  return (
    <div
      ref={aboutRef}
      className="w-screen h-screen bg-[#189AB4] p-20 flex flex-col relative"
    >
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-2/3 justify-center items-center">
          <p className="text-4xl font-bold">About Me</p>
          <p>-------------------------</p>
          <p className="text-center leading-10">
            Learn more about me! My current skills in development and the tools
            I am knowledgeable with and my past work experiences.
          </p>
        </div>
      </div>
      <div className="flex pt-20 gap-10">
        <div className="flex flex-col flex-1 gap-5">
          <div>
            <p className="text-2xl font-bold">Me Now, Passion and Past</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="leading-7">
              <span>Now - </span>I am a full stack web developer building web
              applications and React Native apps. Freelancing and working on
              personal projects. Check out my projects to learn more.
            </p>
            <p className="leading-7">
              <span>Past - </span>My 10+ years in sales and territory
              management, using software to track and complete daily tasks,
              sparked my passion for software engineering.
            </p>
            <p className="leading-7">
              <span>Passion - </span> I am passionate on creating tools base on
              feedback from the field and enhance their daily task.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex justify-center items-end">
            <p className="text-2xl">My Skills</p>
          </div>

          <div className="flex flex-col h-1/2">
            <div className="flex w-full justify-center">
              <div className="flex w-fit justify-center items-center">
                <p className="w-fit h-fit ">Front-end</p>
              </div>
              <div className="flex flex-1 w-full justify-around overflow-hidden">
                {frontendImage.map((image) => (
                  <div className="w-1/12" key={Math.random()}>
                    <img
                      src={image}
                      alt="frontend image"
                      className="w-full"
                      key={Math.random()}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full ">
              <p className="text-base text-center">
                My frontend development tools for building and maintaining
                user-facing web applications.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full items-center">
              <div className="flex w-fit">
                <p>Back-end</p>
              </div>
              <div className="flex flex-1 w-full justify-around overflow-hidden">
                {backendImage.map((image) => (
                  <div className="w-1/12" key={Math.random()}>
                    <img src={image} alt="frontend image" className="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mt-4">
              <p className="text-base text-center">
                My backend development tools in building, maintaining scalable
                database and secure APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/5 mt-20 w-full relative bottom-0">
        <div
          className="w-fit px-10 py-2 rounded bg-[#007EA7] cursor-pointer"
          onClick={scrollToContact}
        >
          <p className="font-bold ">Contact</p>
        </div>
      </div>
    </div>
  )
}

export default MySkills
