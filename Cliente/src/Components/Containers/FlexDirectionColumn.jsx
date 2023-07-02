import React from 'react'

const FlexDirectionColumn = ({children, style, reverse} ) => {
  const direction = reverse ? 'column-reverse' : 'column'
  return (
    <div style={{display: 'flex', flexDirection: direction, ...style}} >
        {children}
    </div>
  )
}

export default FlexDirectionColumn