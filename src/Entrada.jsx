import React from 'react'

const Entrada = (props) => {
  return (
    <input type="text" name={props.name} className='bg-white rounded-lg p-3 mb-5 mt-2' placeholder={props.name}/>
  )
}

export default Entrada