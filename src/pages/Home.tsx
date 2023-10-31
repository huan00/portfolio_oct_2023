import { useRef } from 'react'
import About from './About'
import Works from './Works'
import Contact from './Contact'

const Home = () => {
  const viewRef = useRef<HTMLParagraphElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // console.log(viewRef.current)
  const buttonAnimation = () => {
    if (viewRef.current && aboutRef.current) {
      const element = viewRef?.current.style
      element.transform = 'translate(2px, 2px)'
      element.boxShadow = ''
      element.border = 'none'

      setTimeout(() => {
        element.transform = 'translate(-2px, -2px)'
        element.boxShadow = '5px 5px 5px red'
        element.borderLeft = '1px solid white'
        element.borderTop = '1px solid white'
      }, 500)
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-[#05445E] p-4">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-5xl">H</div>
          <div className="flex list-none">
            <li className="ml-10">Project</li>
            <li className="ml-10">Resume</li>
            <li className="ml-10 cursor-pointer" onClick={scrollToContact}>
              Contact
            </li>
          </div>
        </nav>
        <div className="flex flex-col items-center relative top-1/3 self-center text-center">
          <p className="text-5xl leading-loose ">
            Hello, I'm <span>Huan Zeng</span>
          </p>
          <p className="text-4xl leading-loose">
            I'm a full-stack web developer<span>.</span>
          </p>
          <p
            ref={viewRef}
            className="flex w-fit justify-center items-center text-3xl border-t border-l px-2 transition-all cursor-pointer"
            style={{ boxShadow: '5px 5px 5px red' }}
            onClick={buttonAnimation}
          >
            View &#8594;
          </p>
        </div>
      </div>
      <About aboutRef={aboutRef} scrollToContact={scrollToContact} />
      <Works />
      <Contact contactRef={contactRef} />
    </>
  )
}

export default Home
