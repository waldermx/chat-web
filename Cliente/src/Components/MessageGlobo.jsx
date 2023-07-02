import React from 'react'

const MessageGlobo = ({ children }) => {
    return (
        <div style={globo}>
            <p className='text'>
            {children}
            </p>
        </div>
    )
}

export default MessageGlobo



const globo = {
    backgroundColor: 'var(--primary-color)',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 12,    
}