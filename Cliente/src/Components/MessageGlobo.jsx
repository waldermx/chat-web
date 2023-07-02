import React from 'react'

const MessageGlobo = ({ children, isMyMessage }) => {
    const globo = {
        backgroundColor: isMyMessage?'var(--light-primary-color)':'var(--primary-color)',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 12,    
    }
    return (
        <div style={globo}>
            <p className='text' style={{color:  isMyMessage?'var(--on-primary-container)':'var(--icon-color)'}}>
            {children}
            </p>
        </div>
    )
}

export default MessageGlobo



