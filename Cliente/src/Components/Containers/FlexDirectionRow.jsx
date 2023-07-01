import React from 'react'

const FlexDirectionRow = ({children, style, ...rest}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', ...style}} {...rest} >
        {children}
    </div>
  )
}

export default FlexDirectionRow

