import React, { useState } from "react"

const AmountPicker = ({ value, onChange }) => {
  const [showOther, setShowOther] = useState(false)

  const activeClass = "bg-green-400 text-white font-semibold"

  return (
    <>
      <div className="flex border border-gray-300">
        <div
          className={`cursor-pointer p-4 text-lg border-r border-gray-300 ${value === 10 ? activeClass : ''}`}
          onClick={() => {
            onChange(10)
            setShowOther(false)
          }}
        >
          $10
        </div>
        <div
          className={`cursor-pointer p-4 text-lg border-r border-gray-300 ${value === 20 ? activeClass : ''}`}
          onClick={() => {
            onChange(20)
            setShowOther(false)
          }}
        >
          $20
        </div>
        <div
          className={`cursor-pointer p-4 text-lg border-r border-gray-300 ${value === 30 ? activeClass : ''}`}
          onClick={() => {
            onChange(30)
            setShowOther(false)
          }}
        >
          $30
        </div>
        <div
          className={`cursor-pointer p-4 text-lg ${showOther ? activeClass : ''}`}
          onClick={() => {
            onChange("")
            setShowOther(true)
          }}
        >
          Other
        </div>
      </div>
      {showOther &&
        <div className="flex border-b border-l border-r border-gray-300">
          <span className="p-4">$</span>
          <input
            className="pr-4 pb-4 pt-4 pl-1 outline-none flex-1"
            type="number"
            step=".01"
            min="1"
            placeholder="0"
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </div>
      }
    </>
  )
}

export default AmountPicker
