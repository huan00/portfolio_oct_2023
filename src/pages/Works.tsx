import { useState } from 'react'
import { PROJECTS } from '../constants/Projects'
import Project from '../components/Project'
import { ProjectType } from '../types/types'
import { useInView } from 'react-intersection-observer'

interface Props {
  proRef: React.RefObject<HTMLDivElement>
}

const Works = ({ proRef }: Props) => {
  const { ref, inView } = useInView()
  const [activeProject, setActiveProject] = useState<string>('')

  const hoverProject = (project: ProjectType) => {
    setActiveProject(project.title)
  }

  return (
    <div
      ref={proRef}
      className="w-screen h-screen flex flex-col-reverse sm:flex-row justify-center items-center bg-[#007EA7] px-4 py-10 sm:p-20 gap-10"
    >
      <div className="flex flex-1 h-2/3 w-full justify-center items-center">
        <div className="w-full h-full rounded-2xl relative ">
          {PROJECTS.map((project, index) => (
            <div
              className={`w-full h-fit absolute opacity-0 ${
                activeProject === project.title && 'animate-fly-in'
              }
              ${inView && index === 0 && 'animate-fly-in'}
              `}
              // : 'animate-fly-out'
              key={Math.random()}
            >
              {<Project project={project} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-1 w-full sm:h-1/2 justify-start">
        <div className="flex items-center justify-between">
          <p className="text-lg sm:text-5xl" ref={ref}>
            Works
          </p>
          <p className="text-lg sm:text-5xl">{PROJECTS.length}</p>
        </div>
        <div className=" flex flex-col w-full ">
          {PROJECTS.map((project) => (
            <div key={Math.random()}>
              <div
                className="flex justify-between items-end mt-5 px-2 hover:bg-slate-300 hover:rounded-md cursor-grab"
                onMouseEnter={() => hoverProject(project)}
              >
                <p className="text-base sm:text-xl">{project.title}</p>
                <p className="text-base sm:text-xl">{project.work}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
