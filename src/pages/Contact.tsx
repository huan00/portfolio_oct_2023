import plane from '../assets/sendplane.png'
import copy from '../assets/copy.png'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  contactRef: React.RefObject<HTMLDivElement>
}

// type FromType = {
//   name: string
//   email: string
//   message: string
// }

const Contact = ({ contactRef }: Props) => {
  const { ref, inView } = useInView()
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('hello@huan-zeng.com')
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 200)
  }

  // const [formData, setFormData] = useState<FromType>({
  //   name: '',
  //   email: '',
  //   message: ''
  // })

  // const handleFormValue = (
  //   event:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ): void => {
  //   setFormData((formData) => ({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   }))
  // }

  // const getAPI = async () => {
  //   const res = await axios.get(
  //     'https://formsubmit.co/api/get-apikey/huan.codes@gmail.com'
  //   )
  //   console.log(res)
  // }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   // event.preventDefault()

  //   const res = await axios.post('https://formsubmit.co/huan.codes@gmail.com', {
  //     ...formData
  //   })
  //   console.log(res)
  // }

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between pt-10 md:p-40 bg-[#738FA7]"
      ref={contactRef}
    >
      <div className="w-full flex flex-col items-center">
        <p className="text-2xl md:text-5xl">let's connect</p>
        <p className="text-4xl">------------------</p>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full gap-4 ">
        <div className="flex flex-col flex-1 h-full w-full justify-center items-center">
          <div className="flex flex-col">
            <div
              className="flex justify-center w-full h-8 overflow-hidden"
              ref={ref}
            >
              <p className="shadow-xl text-lg">E-mail: hello@huan-zeng.com</p>

              <img
                src={copy}
                alt=""
                className={`object-fit cursor-pointer ${
                  isCopy ? 'scale-125' : 'scale-100'
                }`}
                onClick={handleCopy}
              />
            </div>
            <div className="w-1/2 self-center md:w-full aspect-square flex justify-center items-center">
              <img
                src={plane}
                alt=""
                className={`w-4/5 md:w-11/12 object-fit ${
                  inView && 'animate-plane'
                }`}
              />
            </div>
          </div>
        </div>

        {/* vertical line */}
        <div className="hidden md:flex border-r h-2/3 justify-center items-center relative top-1/2 -translate-y-1/2" />

        {/* <div className="flex flex-1 h-full w-full justify-center items-center">
          <form
            onSubmit={handleSubmit}
            target="_blank"
            // action="https://formsubmit.co/huan.codes@gmail.com"
            method="POST"
            className="w-full flex flex-col justify-between"
          >
            <input type="hidden" name="_template" value="table" />
            <div className="w-full flex flex-col gap-2">
              <InputField
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormValue}
              />
              <InputField
                name="email"
                placeholder="Your E-mail"
                type="email"
                value={formData.email}
                onChange={handleFormValue}
              />
              <InputField
                name="message"
                placeholder="Message"
                textarea={true}
                value={formData.message}
                onChange={handleFormValue}
              />
            </div>
            <div className="w-1/2 flex justify-center self-center">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-1 p-2  rounded-xl bg-gradient-to-r from-blue-500 to-blue-300  hover:animate-space-move cursor-pointer"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div> */}
        <div className="flex flex-1 px-2 h-full w-full justify-center items-center">
          <form
            target="_blank"
            action="https://formsubmit.co/hello@huan-zeng.com"
            method="POST"
            className="w-full flex flex-col justify-between"
          >
            <div className="w-full flex flex-col gap-4">
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false"></input>

              <input
                type="text"
                name="name"
                className="w-full py-2 px-4 opacity-50 border-none outline-none rounded-lg"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="email"
                className="w-full py-2 px-4 opacity-50 border-none outline-none rounded-lg"
                placeholder="Email Address"
                required
              />

              <textarea
                placeholder="Your Message"
                className="w-full py-2 px-4 opacity-50 border-none outline-none rounded-lg"
                rows={5}
                name="message"
                required
              ></textarea>
            </div>

            <div className="w-1/2 flex justify-center self-center mt-6">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-1 p-2  rounded-xl bg-gradient-to-r from-blue-500 to-blue-300  hover:animate-space-move cursor-pointer"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
