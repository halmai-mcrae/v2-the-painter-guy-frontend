import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [state, handleSubmit] = useForm("maykbnve");
  if (state.succeeded) {
      return   <><h2 className="head-text">Cont<span>act u</span>s.</h2><p className="bold-text">
        Fill out the form below or send a text.</p><p className="bold-text">
          We aim to respond within 24 hours.</p><div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+64 (027) 365-8483" className="p-text" rel="noreferrer">+64 (027) 365-8483</a>
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
        </div><div>
          <h3 className="head-text">
            Thank you.<br /> <span>Luke will be in touch
            </span> soon.
          </h3>
        </div></>
  }
  return (
    <>
      <h2 className="head-text">Cont<span>act u</span>s.</h2>
      <p className="bold-text">
        Fill out the form below or send a text.</p>
      <p className="bold-text">
        We aim to respond within 24 hours.</p>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+64 (027) 365-8483" className="p-text" rel="noreferrer">+64 (027) 365-8483</a>
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
      <form className="app__footer-form" onSubmit={handleSubmit}>
      <div className="app__flex">
      <input
      className="p-text"
      placeholder="Name"
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>
      <div className="app__flex">
      <input
      className="p-text"
      placeholder="Email"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="app__flex">
            <input
            className="p-text"
            placeholder="Phone"
        id="phone"
        type="phone" 
        name="phone"
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      </div>
      <div className="app__flex">
      <textarea
      className="p-text"
      placeholder="Message"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
  
      <button type="submit" className="p-text" disabled={state.submitting}>
        Send Message
      </button>
    </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact us',
  'app__whitebg',
);