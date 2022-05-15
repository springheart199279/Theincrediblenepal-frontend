import React from 'react'
import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className='mailDesc'>Sign up for our mailing list to get updates on new properties, and special offers.</span>
      <div className='mailInputContainer'>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList