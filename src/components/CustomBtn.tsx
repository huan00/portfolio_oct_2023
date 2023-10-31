import React from 'react'

interface Props {
  title: string
  onClick: () => void
}

const CustomBtn = ({ title, onClick }: Props) => {
  return (
    <div
      className="w-full flex justify-center items-center py-1 p-2  rounded-xl bg-gradient-to-r from-blue-500 to-blue-300  hover:animate-space-move cursor-pointer"
      onClick={onClick}
    >
      <p className="font-bold">{title}</p>
    </div>
  )
}

export default CustomBtn
