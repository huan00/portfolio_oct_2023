import React from 'react'

interface Props {
  placeholder: string
  textarea?: boolean
}

const InputField = ({ placeholder, textarea }: Props) => {
  return (
    <div className="w-full py-2 px-4 opacity-50">
      {!textarea ? (
        <input
          className="w-full py-2 px-4 border-none outline-none rounded-lg"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className="w-full py-2 px-4 rounded-lg outline-none border-none"
          rows={5}
        />
      )}
    </div>
  )
}

export default InputField
