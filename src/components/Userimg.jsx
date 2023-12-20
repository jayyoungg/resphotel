import React from 'react'
import './Userimg.css'

const USerimg = 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'

const Userimg = () => {
  return (
    <div className='userimg'>
        <div className="imgholder">
            <img src={USerimg}  alt='none'  style={{ maxWidth: '15vw', height: '15vh', borderRadius: '10vh' }}/>
        </div>

    </div>
  )
}

export default Userimg