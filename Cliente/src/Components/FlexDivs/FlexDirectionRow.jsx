import React from 'react'

const FlexDirectionRow = ({children, style}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', ...style}} >
        {children}
    </div>
  )
}

export default FlexDirectionRow

