import React from 'react'

function ButtonLink ({ className, children }) {
  return (
    <a href="/" className={className}>
      {children}
    </a>
  )
}

export default ButtonLink