import React from 'react'

const FlexContainer = ({children, className}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default FlexContainer