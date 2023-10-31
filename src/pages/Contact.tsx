import React from 'react'
import InputField from '../components/InputField'
import plane from '../assets/sendplane.png'
import copy from '../assets/copy.png'
import CustomBtn from '../components/CustomBtn'

interface Props {
  contactRef: React.RefObject<HTMLDivElement>
}

const Contact = ({ contactRef }: Props) => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-between p-40 bg-[#738FA7]"
      ref={contactRef}
    >
      <div className="w-full flex flex-col items-center">
        <p className="text-5xl">let's connect</p>
        <p className="text-4xl">------------------</p>
      </div>
      <div className="flex w-full h-full gap-2 ">
        <div className="flex flex-col flex-1 h-full w-full justify-center items-center">
          <div>
            <div className="flex justify-center w-full h-8 overflow-hidden">
              <p className="shadow-xl text-lg">E-mail: hello@huan-zeng.com</p>
              <img src={copy} alt="" className="object-fit" />
            </div>
            <div className="w-full aspect-square flex justify-center items-center">
              <img src={plane} alt="" className="object-fit animate-plane" />
            </div>
          </div>
        </div>

        {/* vertical line */}
        <div className="border-r h-2/3 flex justify-center items-center relative top-1/2 -translate-y-1/2" />

        <div className="flex flex-1 h-full w-full justify-center items-center">
          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="w-full flex flex-col justify-between"
          >
            <div className="w-full flex flex-col gap-2">
              <InputField placeholder="Full Name" />
              <InputField placeholder="E-mail" />
              <InputField placeholder="Message" textarea={true} />
            </div>
            <div className="w-1/2 flex justify-center self-center">
              <CustomBtn title="send" onClick={() => {}} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
