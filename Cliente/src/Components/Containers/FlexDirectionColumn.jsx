import React from 'react'

const FlexDirectionColumn = ({children, style} ) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', ...style}} >
        {children}
    </div>
  )
}

export default FlexDirectionColumn