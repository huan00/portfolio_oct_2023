import { useRef, useState } from 'react'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import menuIcon from '../assets/menu.png'

const Home = () => {
  const viewRef = useRef<HTMLParagraphElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)

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

  const scrollToContact = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <div>
      <div className="flex flex-col w-screen h-screen bg-[#05445E] p-4">
        <nav className="flex h-12 justify-between items-center relative">
          <div className="w-full h-full flex  md:justify-start font-bold text-5xl animate-pulse">
            <p>H</p>
          </div>
          <div className="h-full flex items-end flex-col sm:items-center sm:just">
            <div className="sm:hidden w-12 h-12" onClick={renderMenu}>
              <img src={menuIcon} alt="" className="w-12 h-12" />
            </div>
            <div
              className={`${
                showMenu ? 'flex' : 'hidden'
              } flex-col bg-[black] opacity-50  right-0 -bottom-[140%] px-4 py-6 gap-4 rounded-2xl
                          sm:right-0 sm:bottom-0 sm:relative sm:flex sm:flex-row sm:px-0 sm:py-0 sm:gap-0 sm:justify-center sm:bg-opacity-0 list-none`}
            >
              <li
                className="ml-10 cursor-pointer"
                onClick={() => scrollToContact(projectRef)}
              >
                Project
              </li>
              <li className="ml-10 cursor-pointer">Resume</li>
              <li
                className="ml-10 cursor-pointer"
                onClick={() => scrollToContact(contactRef)}
              >
                Contact
              </li>
            </div>
          </div>
        </nav>
        <div className="flex flex-col items-center relative top-1/3 self-center text-center">
          <p className="text-xl sm:text-5xl leading-loose ">
            Hello, I'm <span>Huan Zeng</span>
          </p>
          <p className="text-xl sm:text-4xl leading-loose">
            I'm a full-stack web developer<span>.</span>
          </p>
          <p
            ref={viewRef}
            className="flex w-fit justify-center items-center text-2xl relative top-24 sm:top-4 sm:text-3xl border-t border-l px-2 transition-all cursor-pointer"
            style={{ boxShadow: '5px 5px 5px red' }}
            onClick={buttonAnimation}
          >
            View &#8594;
          </p>
        </div>
      </div>
      <About
        aboutRef={aboutRef}
        scrollToContact={() => scrollToContact(contactRef)}
      />
      <Works proRef={projectRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}

export default Home
