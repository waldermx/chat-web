import React from 'react'

const FlexDirectionRow = ({children, style, form, ...rest}) => {
  
  if(!form){
    return (
      <div style={{display: 'flex', flexDirection: 'row', ...style}} {...rest} >
          {children}
      </div>
    )
  }
 
}

export default FlexDirectionRow

