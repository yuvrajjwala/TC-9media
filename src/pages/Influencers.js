import React from 'react'
import LightHeader from '../components/LighHeader/LightHeader'
import './influencers.css'
import img1 from '../assets/img/influencers/1.png'
import img2 from '../assets/img/influencers/2.png'
import img3 from '../assets/img/influencers/3.png'
import img4 from '../assets/img/influencers/4.png'
import img5 from '../assets/img/influencers/5.png'
import img6 from '../assets/img/influencers/6.png'
import img7 from '../assets/img/influencers/7.png'
import img8 from '../assets/img/influencers/8.png'
import img9 from '../assets/img/influencers/9.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer/Footer';
AOS.init()

function Influencers() {
    document.title="Influencers | 9mediaOnline";
    return (
        <>
            <LightHeader text1="Launch your own Video Streaming Platform" text2="" subtext1="9MO offers an end-to-end live streaming platform catering to OTT requirements of various industries via On-Demand, Live Streaming and online store." buttonText="GET STARTED" text0="INFLUENCERS," />
            <div id='in-arr1'>All-Inclusive OTT Platform Fully Managed to <br />Launch White Label Multi-Device OTT streaming</div>
            <div id='in-arr2'>Video Streaming Platforms, Offering Video on Demand<br/> (VOD), Live Streaming,
                Monetizations, CDN, DRM, and much more!</div>
            <div id='in-arr3'>
                <div data-aos="fade-up"
                data-aos-duration="500"  className='in-flex-div'>
                    <img src={img1} alt=''/>
                    <div className='flex-div'>Your own branded OTT Platform</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='in-flex-div'>
                    <img src={img2} alt=''/>
                    <div className='flex-div'>Stream directly from the Camera</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="900" data-aos-delay="400" className='in-flex-div'>
                    <img src={img3} alt=''/>
                    <div className='flex-div'>Supports HLS Feed and Peer-to-Peer Streaming</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1100" data-aos-delay="500" className='in-flex-div'>
                    <img src={img4} alt=''/>
                    <div className='flex-div'>End-to-end Live streaming using a Live Plugin</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1300" data-aos-delay="700" className='in-flex-div'>
                    <img src={img5} alt=''/>
                    <div className='flex-div'>Live Stream on 3rd party platforms</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1500" data-aos-delay="900" className='in-flex-div'>
                    <img src={img6} alt=''/>
                    <div className='flex-div'>Secure Content Delivery</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1700" data-aos-delay="1100" className='in-flex-div'>
                    <img src={img7} alt=''/>
                    <div className='flex-div'>Monetize Live Streaming Content</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1900" data-aos-delay="1300" className='in-flex-div'>
                    <img src={img8} alt=''/>
                    <div className='flex-div'>Convert Live Content to On-demand</div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="2100" data-aos-delay="1500" className='in-flex-div'>
                    <img src={img9} alt=''/>
                    <div className='flex-div'>Livestream to Social Media Platforms</div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Influencers