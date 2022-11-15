import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from '../assets/img/home/Rectangle62.svg';
import back from '../assets/img/home/lines2.png'
import menu from '../assets/img/home/menu.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function Header(props) {
    function opencontainer() {
        document.getElementById("mob-menu-container").style.width = "100vw";
    }
    function closecontainer() {
        document.getElementById("mob-menu-container").style.width = "0vw";
    }


    return (
        <>

            <div className="header">

                {/* <div id="wave"></div> */}

                <div id="back">
                    <img src={back} alt='' id="back1" />
                    <img src={back} alt='' id="back2" />

                </div>
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Testimonials</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Performance</Link></li>
                  
                    </ul>
                    <div>
                        <Link to="/"> <button id="get-started"><span>CONTACT US</span></button></Link>
                        <div onClick={opencontainer} id="header-ham-menu"><img src={menu} alt="≣"></img></div>
                    </div>
                    <div id="mob-menu-container">
                        <div className="mob-cont-top">
                            <img src={logo}></img>
                            <div onClick={closecontainer} className="X">X</div>
                        </div>
                        <div className="list-mob-cont">
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Testimonials</Link></li>
                            <li><Link to="/">Privacy</Link></li>
                            <li><Link to="/">Performance</Link></li>
                            </ul>
                            <div>
                            <Link to="/"><button id="get-started1"><span>Conact Us</span></button></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="headText">{props.text1} <span>{props.text2}</span></div>
                <div className="subText" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="100">{props.subtext1}</div>


            </div>
        </>)
}

export default Header