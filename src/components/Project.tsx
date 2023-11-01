import CustomBtn from './CustomBtn'
import { ProjectType } from '../types/types'

interface Props {
  project: ProjectType
}

const Project = ({ project }: Props) => {
  const visitWebsite = () => {
    window.open(`${project.website}`, '_blank')
  }
  return (
    <div
      className={`w-full flex flex-col rounded-xl p-4 shadow-2xl bg-gradient-to-br from-[#263361] to-[#418fde] relative gap-2 
      `}
    >
      <div className="w-full flex flex-col gap-2 ">
        <div className="w-full aspect-[2/1] rounded-xl overflow-hidden">
          <img
            src={project.imgUrl}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-1 gap-2 flex-wrap">
          {project.tech.map((tech) => (
            <p
              key={Math.random() + tech}
              className="w-fit py-1 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div className="h-fit mt-5 flex flex-col gap-2">
        <p className="text-xl font-black">{project.title}</p>
        <p>{project.description}</p>
        <p>
          <span className="font-bold">{project.devType}</span>
          {project.development}
        </p>
      </div>
      <div className="w-2/5 relative mt-5">
        <CustomBtn title={'visit'} onClick={visitWebsite} />
      </div>
    </div>
  )
}

export default Project
