import React from 'react'
import './Display.css'

const DispImg = 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600'

const Display = () => {
  return (
    <div className='display'>
        <img src={DispImg} alt='none'  style={{ maxWidth: '100vw', height: '30vh', width: '80vw', borderRadius: '2vw', marginTop: '5vh'  }}/>
    </div>
  )
}

export default Display