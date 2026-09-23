import React from 'react'

const DropDown2 = ({ items }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-inner-2">
        <div className="dropdown-col">
          {items.map((text) => (
            <a key={text} href="#" className="dropdown-item">{text}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropDown2