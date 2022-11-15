import React from 'react'
import './channels.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header'
import './brands.css'
import friends from '../assets/img/brands/Image.png'
import one from '../assets/img/brands/1.png'
import two from '../assets/img/brands/2.png'
import three from '../assets/img/brands/3.png'
import audience from '../assets/img/brands/Audience.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


function Brands() {
    document.title="Brands | 9mediaOnline";
    return (
        <>
            <Header text1="Future-Safe Ad Solution" text2=" for Brands" subtext1="" buttonText="GET STARTED" />
            <div  id='b-arr1'>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='b-arr11'>An identity strategy for the future.</div>
                <div data-aos="fade-up"
                data-aos-duration="800" data-aos-delay="300" id='b-new'>Know exactly where and when your creatives ran.</div>
                <div id='b-arr12'>
                    <img data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="600" src={friends} alt='' id='barr12-img' />
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='barr121'>Experience a three-dimensional view of identity covering
                        people, homes and device types</div>

                </div>
            </div>

            <div className='b-arr2'>
                <img  data-aos="fade-up"
                data-aos-duration="700"  src={one} alt='' />
                <div className='side'>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='side-1'>Media Measurement</div>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="500" className='side-2'>Accurately address your specific audiences at scale across hundreds of channels, platforms,
                        publishers, or networks and safely translate data between identity spaces to improve results.
                    </div>
                </div>
            </div>
            <div className='b-arr2' id='one'>
                <img  data-aos="fade-up"
                data-aos-duration="1000"  src={two} alt='' />
                <div className='side'>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="100" className='side-1' id='width-91'>Eliminate Wasted TV and Streaming Ad Impressions.</div>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='side-2'>Immediately verify TV ad impressions and manage frequency with realtime media measurement. Know exactly where and when your
                        creatives ran.
                    </div>
                </div>
            </div>
            <div className='b-arr2'>
                <img  data-aos="fade-up"
                data-aos-duration="1000"  src={three} alt='' />
                <div className='side'>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="100" className='side-1' id='width-76'>Cross Platform Targeting</div>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='side-2'>Execute true cross-channel buys across traditionally siloed media
                        channels by activating advanced audiences within premium digital-first
                        environments.
                    </div>
                    <button onClick={()=>window.location.href='/contact'}  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='last-btn1'>CUSTOMERS</button>
                </div>
            </div>

            <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="100" id='attr'>ATTRIBUTION</div>
            <div id='b-arr3'>
                <img  data-aos="fade-up"
                data-aos-duration="1000"  src={audience} alt='' />
                <div id='arr3-text'>
                    <div  data-aos="fade-up"
                data-aos-duration="700"  id='text-1'>Unify streaming, and digital data to holistically measure and optimize <br/>
                        media performance with prescriptive insights.</div>
                    <div  data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='text-2'>
                        Assess and identify <br/>
                        share-shift opportunities to maximize audience reach at the optimal <br/>
                        frequency across channels.
                    </div>
                </div>
            </div>


            <div id='last-head'>Take a look at your clients</div>
            <button onClick={()=>window.location.href='/contact'} data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='last-btn2'>CUSTOMERS</button>
            <Footer />
        </>
    )
}

export default Brands;