import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/img/home/footerlogo.png'
import twitter from '../../assets/img/home/twitter.png'
import likedin from '../../assets/img/home/linkedin_square.png'
import { Link } from "react-router-dom";



const Footer = () => {
   return (
      <div className='footer-main'>
         <div className='footer-container'>
            
            <div className='footer-left'>
               <img src={footerlogo} alt="Media Online" />
            </div>
            
            
            <div className='footer-right'>
            <div className='footer-left-main-container'>
               <div >
                  <div className='quick-links'>
                     <div className='quicklinks-container'>
                        <span className='link-footer'><a href='/'> HOME</a></span>
                        <span className='link-footer' id='clients1'><a href="/clients">CLIENTS</a></span><br></br>
                     </div>
                     <div className='quicklinks-container'>
                        <span className='link-footer'><a href="/channels">CHANNELS</a></span>
                        <span className='link-footer' id='clients2'> <a href="/influencers">INFLUENCERS</a></span><br></br>
                     </div>
                     <span className='link-footer'><a href="/brands">BRAND</a></span>
                     <span className='link-footer'  id='clients3'><a href="/">RESOURCES</a></span>
                  </div>
                  <div></div>
               </div>
               <div className='get-main-head'>
                  <div className='get-in-touch'>GET IN TOUCH</div>
                  <p className='get-in-touch-p'>India | Singapore | Malaysia | Dubai<br></br>
                  +1 513 318 7199<br></br>
                  +65 31 634 651
                  </p>

                  
               </div>
              
            </div>
            </div>
         </div>
         <div className='footer-bottom'>
                  <ul>
                     <li style={{color:"white"}}>© 2022 9 Media Online</li>
                     <li><a href="/privacy-policy">Privacy Policy</a></li>
                     <li><a href="/terms-and-conditons">Terms and conditions</a></li>
                     <li>Do Not Sell My Personal Information</li>
                     <div style={{display:"flex"}}>
                     <li id='twit'><img src={twitter}/></li>
                     <li id='lin'><img src={likedin}/></li>
                     </div>
                  </ul>
               </div>
      </div>
   )
}

export default Footer