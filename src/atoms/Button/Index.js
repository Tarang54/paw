import React from 'react'

function Button({
    onClick,
    customStyles,
    customText
}) {
  return (
      <button
      onClick={onClick}
      style={customStyles}
      >
        {customText || 'Click Me'}
      </button>
  )
}

export default Button
