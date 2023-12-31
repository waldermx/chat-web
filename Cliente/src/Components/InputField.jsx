import React from 'react'

const InputField = ({ ...props }) => {
    return (
        <input type="text" style={style} className='InputField' {...props} />
    )
}

export default InputField

const style = {
    width: '100%',
    borderRadius: 30,
    border: '1px solid #BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: '1.2rem',
    paddingLeft: '10px',
}