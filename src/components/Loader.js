import React from 'react'
import ReactLoading from 'react-loading'
import './styles/loader.css'

function Loader() {
  return (
    <div className='loader'>
        <ReactLoading type='balls' color='#000' height={50} width={50} />
    </div>
  )
}

export default Loader