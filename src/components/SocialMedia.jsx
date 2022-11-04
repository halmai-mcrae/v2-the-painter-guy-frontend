import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="tel:+64 27 365 8483"
          rel="noreferrer"
        >
          <FaPhone />
        </a>
      </div>
      <div>
        <a
          href="mailto:luke@thepainterguy.co.nz"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/the-painter-guy-nz/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
