import React from 'react'

interface Props {
  name: string
  placeholder: string
  textarea?: boolean
  value: string
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  type?: string
}

const InputField = ({
  name,
  placeholder,
  textarea,
  value,
  onChange,
  type
}: Props) => {
  return (
    <div className="w-full py-2 px-4 opacity-50">
      {!textarea ? (
        <input
          className="w-full py-2 px-4 border-none outline-none rounded-lg"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name="message"
          value={value}
          className="w-full py-2 px-4 rounded-lg outline-none border-none"
          rows={5}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default InputField
