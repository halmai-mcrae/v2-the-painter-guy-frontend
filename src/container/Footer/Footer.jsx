import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, phone, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Cont<span>act u</span>s.</h2>
      <p className="bold-text">
        We aim to respond within 24 hours.</p>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text" rel="noreferrer">+64 (027) 365-8483</a>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="instagram" />
          <a href="mailto:luke@thepainterguy.co.nz" target="_blank" className="p-text" rel="noreferrer">Email</a>
        </div>
        <div className="app__footer-card">
          <img src={images.redux} alt="instagram" />
          <a href="https://www.instagram.com/_thepainterguy/?hl=en%2F" target="_blank" className="p-text" rel="noreferrer">Instagram</a>
        </div>
        <div className="app__footer-card">
          <img src={images.flutter} alt="facebook" />
          <a href="https://www.facebook.com/thepainterguy/" target="_blank" className="p-text" rel="noreferrer">Facebook</a>
        </div>
        
        <div className="app__footer-card">
          <img src={images.spotifyGreen} alt="spotify" />
          <a href="https://open.spotify.com/user/1291311313" target="_blank" className="p-text" rel="noreferrer">Listen on Spotify</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="phone" placeholder="Phone" name="phone" value={phone} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you.<br/> <span>Luke will be in touch
            </span> soon.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact us',
  'app__whitebg',
);