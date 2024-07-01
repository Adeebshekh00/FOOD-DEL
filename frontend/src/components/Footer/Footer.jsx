import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'>
          <div className='footer-content-left'>
              <img src={assets.red} alt='' />
             <p>Your feedback is of atmost importance!!</p>
             <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
             </div>
          </div>
          <div className='footer-content-center'>
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

          </div>

          <div className='footer-content-right'>
            <h2>Get in Touch!!</h2>
            <li>+1-312-546-7990</li>
            <li>contact@RedChillies.com</li>
          </div>

       </div>
       <hr/>
       <p className='footer-copyright'>Copyright 2024@RedChillies - All Right Reserved</p>
    </div>
  )
}

export default Footer