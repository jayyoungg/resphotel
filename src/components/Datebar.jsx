import React from 'react'
import './Datebar.css'



let today = new Date();
  
  let dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const Datebar = () => {
  return (
    <div className='datebar'>
        <p>{dateString}</p>
    </div>
  )
}

export default Datebar