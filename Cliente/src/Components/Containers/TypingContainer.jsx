import React from 'react'
import FlexDirectionRow from './FlexDirectionRow'

const TypingContainer = ({ children, onSubmit }) => {
    return (
        <FlexDirectionRow style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            width: '100%',
            backgroundColor: 'var(--light-primary-color)',
            color: '#2d1f7b'
        }}>
            <form onSubmit={onSubmit} style={{ display: 'flex', height: '60%', width: '80%', alignItems: 'center' }}>
                {children}
            </form>

        </FlexDirectionRow >)
}

export default TypingContainer