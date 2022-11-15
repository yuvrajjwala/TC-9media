import React from 'react'
import Header from '../components/Header'
import '../components/header.css'
import '../pages/home.css'
import image1 from '../assets/img/home/TV.png'
import image2 from '../assets/img/home/Group76.png'
import image3 from '../assets/img/home/1.png'
import image4 from '../assets/img/home/2.png'
import image5 from '../assets/img/home/3.png'
import SineWaves from 'sine-waves';
import image6 from '../assets/img/home/4.png'
import image7 from '../assets/img/home/5.png'
import image8 from '../assets/img/home/6.png'
import image9 from '../assets/img/home/7.png'
import image10 from '../assets/img/home/8.png'
import image11 from '../assets/img/home/9.png'
import image12 from '../assets/img/home/10.png'
import image13 from '../assets/img/home/11.png'
import image14 from '../assets/img/home/12.png'
import tv from '../assets/img/home/tv_1.png'
import lock from '../assets/img/home/lock.png'
import cash from '../assets/img/home/cash.png'
import hamburger from '../assets/img/home/hamburger.png'
import overflow from '../assets/img/home/071.png'
import privateMarket from '../assets/img/home/PrivateMarketplace.png'
import timeline from '../assets/img/home/verticalLine.png'
import t2016 from '../assets/img/home/2016.svg'
import t2017 from '../assets/img/home/2017.svg'
import t2018 from '../assets/img/home/2018.svg'
import t2019 from '../assets/img/home/2019.svg'
import t2020 from '../assets/img/home/2020.svg'
import t2021 from '../assets/img/home/2021.svg'
import t2024 from '../assets/img/home/2024.svg'
import circle_out from '../assets/img/home/Ellipse3.png'
import logo1 from '../assets/img/home/MaskGroup.png'
import logo_9 from '../assets/img/home/logo.png'
import box1 from '../assets/img/home/box1.svg'
import box2 from '../assets/img/home/box2.svg'
import Testimonial from '../components/Testimonial/Testimonial'
import sidebg from '../../src/assets/img/home/side-bg.svg'
import waving from '../../src/assets/img/home/Yuv2.png'
import lockbg from '../../src/assets/img/home/lockbg.png'
import Footer from '../components/Footer/Footer';
import LowerContact from '../components/Lowecontact/LowerContact';
import assesmentbg from '../assets/img/home/assesment-bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
function Home() {

    return (
        <>

            <Header text1="Privacy and Performance" text2=" By Design" subtext1="Protect your audience's privacy, Enhance your audience's data" buttonText="GET STARTED" />

            <div className='book-assesment-container'>
                <img id='assesment-img' src={assesmentbg}></img>
                <div className='left-assesment-container'>
                    <p className="left-assesment-heading">
                        Built for the future of Smart TV Advertising
                    </p>
                    <p className='left-assesment-subheading'>
                        ARE YOU PREPARED FOR A WORLD WITHOUT THIRD-PARTY COOKIES?
                    </p>
                    <button id="btn-1">Download The Report</button>
                </div>
                <div className='assesemnt-form'>
                    <div className='lower-conter-right' data-aos="fade-up"
                        data-aos-duration="1000" data-aos-delay="400">
                        <div className='get-a-demo-border'>
                            <div className='get-a-demo-form'>
                                <p id='get-1'>Book a free assessment</p>
                                <p>Name</p>
                                <input name='name' type="text"></input>
                                <p>Email</p>
                                <input id='text-input-2' type="text" name='email'></input><br></br>
                                <button>SUBMIT</button>
                                <p id='create-account-assement'>or <a href='#'>Create a Free Account</a></p>
                                <p className='lower-text-contact'>To learn how Clearbit handles your information, please see our <a href='#'>privacy policy.</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>









            <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="100" id='arr2'>
                <div id='arr2-1'>Built for the future of smart TV Advertising</div>
                <div id="container1">
                    {/* <canvas id="waves" style={{height:"400px !important"}}></canvas> */}
                    <div id="back0">
                        <img src={waving} alt='' id="back11" />
                        <img src={waving} alt='' id="back12" />
                    </div>
                </div>
                <div className='tv-container'>
                    <div className='tvimg'><img data-aos="zoom-in"
                        data-aos-duration="1000" data-aos-delay="100" src={image1} alt='' id="arr2-3" /></div>
                    <div className='tv-txt'>
                        <p className='tv-text-1'>
                            Protect your audience's privacy,
                            Enhance your audience's data.
                        </p>
                        <div className='tv-text-2-continer'>
                        <p className='tv-text-2'>
                            ARE YOU PREPARED FOR A WORLD WITHOUT THIRD-PARTY COOKIES?
                        </p>
                        </div>
                       <div className='tv-text-3-container'>
                        <p className='tv-text-3'>
                            Data fragmentation and degradation of third party cookies
                            has allowed us to harness opportunities and reimagine how
                            audience targeting, Attribution can be brought forward in a
                            privacy-focussed manner.
                        </p>
                        </div>

                    </div>
                </div>


                <div id='arr2-2'>
                   

                </div>
            </div>
            <div id='arr7' data-aos="fade-up"
                data-aos-duration="1000">
                <div id='arr7-1'>TESTIMONIALS</div>
                <div id='arr7-2'>The Word of Trust</div>
            </div>

            <Testimonial />


            <div id='arr7' data-aos="fade-up"
                data-aos-duration="1000">
                <div id='arr7-1'>PRIVACY</div>
                <div id='protect-text'>"Protect your audience from data leaks while watching our ads."</div>

                <div className='lock-div'>
                    <img id='lock-bg' src={lockbg}></img>
                    <div className='lock-div-left'>
                        <div>
                        <img src={logo_9}></img>
                        <button className='button' id="btn-1">GET STARTED</button>
                        </div>
                        
                    </div>
                    <div className='lock-div-right'>
                        <div className='lock1'>
                            <div className='lock-1'>
                                NO REVERSE ENGINEERING
                                
                            </div>
                            <div className='line-lock'></div>
                            <p>
                            We turn your audience data into anonymous identifiers, so advertisers can't reverse-engineer your audience information.
                            </p>
                        </div>

                        <div className='lock1'>
                            <div className='lock-1'>
                                NO REVERSE ENGINEERING
                                
                            </div>
                            <div className='line-lock'></div>
                            <p>
                            We turn your audience data into anonymous identifiers, so advertisers can't reverse-engineer your audience information.
                            </p>
                        </div>

                        <div className='lock1'>
                            <div className='lock-1'>
                                NO REVERSE ENGINEERING
                                
                            </div>
                            <div className='line-lock'></div>
                            <p>
                            We turn your audience data into anonymous identifiers, so advertisers can't reverse-engineer your audience information.
                            </p>
                        </div>
                    
                        
                    </div>
                </div>
            </div>



            <div data-aos="fade-up"
                data-aos-duration="500" id='arr3'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="0" id='arr3-1'>THE ONES WHO BELIEVE IN US</div>
                <div id='arr3-2'>
                    <img id='arr3-2-1' src={image2} alt="" />
                    <img id='arr3-2-2' src={image2} alt="" />
                </div>
            </div>

            <div id='arr7-1'>CHANNELS</div>
                <div style={{width:"90vw"}} id='arr7-2'>Safeguard your audience and your revenue.</div>

            <div id="arr4">
        
                   
                <div id='arr4-2'>
                    <img data-aos="fade-up"
                        data-aos-duration="1000" data-aos-delay="300" id='arr4-2-1' src={image3} alt='' />
                    <img data-aos="fade-up"
                        data-aos-duration="1000" data-aos-delay="350" id='arr4-2-2' src={image4} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="1500" data-aos-delay="350" id='arr4-2-3' src={image5} alt='' />
                    <img data-aos="fade-up"
                        data-aos-duration="1600" data-aos-delay="400" id='arr4-2-4' src={image6} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="1800" data-aos-delay="400" id='arr4-2-5' src={image7} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2000" data-aos-delay="400" id='arr4-2-6' src={image8} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2100" data-aos-delay="500" id='arr4-2-7' src={image9} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2500" data-aos-delay="500" id='arr4-2-8' src={image10} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2600" data-aos-delay="500" id='arr4-2-9' src={image11} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2700" data-aos-delay="600" id='arr4-2-10' src={image12} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2900" data-aos-delay="600" id='arr4-2-11' src={image13} alt='' />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="3000" data-aos-delay="600" id='arr4-2-12' src={image14} alt='' />
                </div>
                <div className='activate'>
            Activate your channel audience, without exposing any data. Connect with advertisers securely. Build privacy-safe audience segments. Transfer Data without the worry of data leak.
            </div>
            </div>
            
            {/* <button onClick={() => window.location.href = '/contact'} id='book-a-free'>Book a free Consultation</button> */}




            <div id='arr7-1'>PERFORMANCE</div>
            <div className='arr-subtext'>Maximize your earnings by getting bids that match your audience's value. </div>
            <div className='arr-p'>
            We work closely with advertisers to understand which identifiers are exactly producing success.

The information you provide is used to match and enhance your audience data points with identifiers relevant to the advertiser, allowing them to get the most out of your audience data and compete in a privacy-focused environment.
            </div>

            <div className='box-container'>
                <img className='img-drag' src={box1} draggable="false"></img>
                <img className='img-drag' src={box2} draggable="false"></img>
            </div>

     

            <div data-aos="fade-up"
                data-aos-duration="1000" id='arr8-0'>How did we get here?</div>
            <div id='arr8'>
                <div id='arr8-1'>
                    <div id='timeline-left'>
                        <img data-aos="fade-up"
                            data-aos-duration="500" data-aos-delay="300" id='t2016' className='relative' src={t2016} alt='' draggable='false' />
                        <img data-aos="fade-up"
                            data-aos-duration="500" data-aos-delay="500" id='t2018' className='relative' src={t2018} alt='' draggable='false' />
                        <img data-aos="fade-up"
                            data-aos-duration="500" id='t2020' className='relative' data-aos-delay="2500" src={t2020} alt='' draggable='false' />
                        <img data-aos="fade-up"
                            data-aos-duration="1000" id='t2024' className='' data-aos-delay="3000" src={t2024} alt='' draggable='false' />
                    </div>
                    <img src={timeline} alt='' draggable='false' />
                    <div id='timeline-right'>
                        <img data-aos="fade-up"
                            data-aos-duration="500" data-aos-delay="1000" id='t2017' className='relative' src={t2017} alt='' draggable='false' />
                        <img data-aos="fade-up"
                            data-aos-duration="500" id='t2019' className='relative' data-aos-delay="2000" src={t2019} alt='' draggable='false' />
                        <img data-aos="fade-up"
                            data-aos-duration="500" id='t2021' className='relative' data-aos-delay="3000" src={t2021} alt='' draggable='false' />
                    </div>
                </div>
                <div id='arr8-2'>
                    <div id='arr8-2-1'>
                        <img src={circle_out} alt='' id='arr8-img1' className='img-absolute' />
                        <img src={circle_out} alt='' id='arr8-img2' className='img-absolute' />
                        <img src={circle_out} alt='' id='arr8-img3' className='img-absolute' />
                        <img src={logo1} alt='' id='arr8-img4' className='img-absolute' />
                    </div>
                    <div id='arr8-2-2'>
                        <div id='arr8-2-2-1'>We are prepared for a world without third-party cookies, are you?</div>
                        <button onClick={() => window.location.href = '/contact'} id='arr8-2-2-2'>Learn More</button>
                        <div id='arr8-2-2-3'>9MO is developing new tools, features and strategy partnerships to drive scale and performance for effective privacy-compliant advertising solutions.
                        </div>
                    </div>
                </div>
            </div>
            

            <div>

                
      <p  className='heading-lower-contact' data-aos="fade-up"
     data-aos-duration="1000">98% of our ads are delivered to individuals,<br></br> not to cookies.</p>
      <div className='lower-conten-box'>
     
         <div  className='lower-conter-right1' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400">
                         <div className='last-head'>Take the first step</div>
          <div className='get-a-demo-border'>
           <div className='get-a-demo-form'>
              <p id='get-1'>Get a Demo</p>
              <p>Name</p>
              <input name='name' type="name"></input>
              <p>Email</p>
              <input name='email' type="email"></input>
              <p>Message</p>
              <input id='input-2' type="text"></input><br></br>
              <button>SUBMIT</button>
              <p className='lower-text-contact'>To learn how Clearbit handles your information, please see our <a href='#'>privacy policy.</a></p>
           </div>
         </div>
         </div>
      </div>
    </div>

            <Footer />

        </>
    )
}

export default Home