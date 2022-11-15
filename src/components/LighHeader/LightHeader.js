import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/img/home/Logo.svg';
import back from '../../assets/img/home/Yuv2.png'
import menu from '../../assets/img/home/menu.png'
import './LightHeader.css'

const LightHeader = (props) => {
  function opencontainer() {
    document.getElementById("mob-menu-container-light").style.width = "100vw";
  }
  function closecontainer() {
    document.getElementById("mob-menu-container-light").style.width = "0vw";
  }
  return (
    <>
      <div className="header-light">

        {/* <div id="wave"></div> */}

        <div id="back-light">
          <img src={back} alt='' id="back1" />
          <img src={back} alt='' id="back2" />

        </div>
        <nav>
          <div className="logo"><img src={logo} alt="" /></div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/channels">Channels</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/influencers">Influencers</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><a href="">Get in Touch</a></li> */}
          </ul>
          <div>
          <Link to="/contact"> <button id='get-started-2'><span>GET IN TOUCH</span></button></Link>
            <div onClick={opencontainer} id="header-ham-menu"><img id='menu1' src={menu} alt="≣"></img></div>
          </div>
          <div id="mob-menu-container-light">
            <div className="mob-cont-top-light">
              <img src={logo}></img>
              <div onClick={closecontainer} className="X">X</div>
            </div>
            <div className="list-mob-cont-light">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/channels">Channels</Link></li>
                <li><Link to="/brands">Brands</Link></li>
                <li><Link to="/influencers">Influencers</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/contact">Get in Touch</Link></li> */}

              </ul>
            </div>
            <Link to="/contact"> <button id="get-started1"><span>GET STARTED</span></button></Link>
          </div>
        </nav>
        <div className='head-head'>{props.text0}</div>
        <div className="headText-light">{props.text1} <span>{props.text2}</span></div>
        <div className="subText-light">{props.subtext1}</div>
        {/* {props.buttonText!=""?(<button id="get-started-light"><span>{props.buttonText}</span></button>):(<div></div>)} */}
        

      </div>
    </>
  )
}

export default LightHeader