import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div><FaPhone /></div>
      <div><FaEnvelope /></div>
      <div><BsLinkedin /></div>
    </div>
  )
}

export default SocialMedia