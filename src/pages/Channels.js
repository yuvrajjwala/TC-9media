import React from 'react'
import './channels.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header'
import friends from '../assets/img/channel/friends.png'
import one from '../assets/img/channel/Group77.png'
import two from '../assets/img/channel/Group78.png'
import three from '../assets/img/channel/Group79.png'
import four from '../assets/img/channel/Group80.png'
import five from '../assets/img/channel/Group81.png'
import six from '../assets/img/channel/Group82.png'
import seven from '../assets/img/channel/FillRates.png'
import eight from '../assets/img/channel/Group84.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Channels() {
    document.title="Channels | 9mediaOnline";
    return (
        <>
            
            <Header text1="Future-Safe Ad Solution" text2=" for Channels" subtext1="" buttonText="GET STARTED" />

            <div id='c-arr1'>
                <div data-aos="fade-up"
                data-aos-duration="700"  id='c-arr11'>Run smart tv ad campaigns in a privacy-safe environment.</div>
                <div id='c-arr12'>
                    <img data-aos="fade-up"
                data-aos-duration="1000" src={friends} alt='' id='arr12-img' />
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='arr121'>Safeguard your audience data by creating encrypted identifiers unique to your audience.
                        9MO helps our clients in delivering high quality, privacy-safe data at scale while
                        maximizing their ad revenue. Let us help create and match your unique identifiers to a set of users that meet the
                        advertiser’s needs.</div>
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" id='arr122'>9MO uses first-party data and machine learning to build audience cohorts based on the
                        content users who consume content across your channel.</div>

                </div>
            </div>

            <div className='c-arr2'>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='area-left'>Hybrid Auction System</div>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="500" className='area-right'>The hybrid auction system allows for competition among
                    multiple SSPs, DSPs, Brands and Agencies. This allows impressions to
                    be sold at the highest possible price.
                    Our SSAI unified auction technology uses machine learning to optimize
                    yield, making it a safe choice for implementing programmatic solutions.
                    
                    <br></br><br></br><br></br>
                     <button onClick={()=>window.location.href='/contact'} id='book-a-free'>APPLY NOW</button>
                    </div>
            </div>
            <span className='line'></span>
            <div className='c-arr2'>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='area-left'>Maximize revenue with multi-channel tools</div>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='area-right'>Grow business by giving advertisers what they want. Leverage cuttingedge planning, packaging, sales, and measurement capabilities to extract
                    more value from your inventory.
                </div>
            </div>
            <span className='line'></span>
            <div className='c-arr2' id='margin-bottom'>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='area-left' id='length'>Dedicated Customer Support
                </div>
                <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='area-right'>The company has a dedicated account management team to help you with
                    onboarding and optimization.
                    <ul className='company-dedicated-ul'>
                        <li data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300">We continuously monitor ads to ensure that only brand-safe ads are shown to your
                            audience.</li>
                        <li data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="500">Unique demand from multiple SSPs, DSPs and programmatic deals</li>
                        <li data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="700">Yield analytics with aggregated data and actionable insights</li>
                    </ul>

                    <br></br><br></br><br></br>
                     <button onClick={()=>window.location.href='/contact'} id='book-a-free'>JOIN US</button>
                    </div>
            </div>


            <div id='c-arr3'>
                <div id='c-head'>Auction Analytics</div>
                <div id='c-sub-head'>Robust reporting lets you keep tabs on demand partners and daily revenue</div>
                <div id='c-main-area'>
                    <div data-aos="fade-up"
                data-aos-duration="700" className='mini-area'>
                        <img src={one} alt=''/>
                        <div className='mini-text'>Ad Impressions</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="200" className='mini-area'>
                        <img src={two} alt=''/>
                        <div className='mini-text'>Video Completion</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="300" className='mini-area'>
                        <img src={three} alt=''/>
                        <div className='mini-text'>Report Scheduler</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="500" className='mini-area'>
                        <img src={four} alt=''/>
                        <div className='mini-text'>CPMs</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="600" className='mini-area'>
                        <img src={five} alt=''/>
                        <div className='mini-text'>Ad Requests</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="700" className='mini-area'>
                        <img src={six} alt=''/>
                        <div className='mini-text'>Time Period</div>
                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="800" className='mini-area'>
                        <img src={seven} alt=''/>

                    </div>
                    <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="900" className='mini-area'>
                        <img src={eight} alt=''/>

                    </div>
                </div>
            </div>


            <div data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="100" id='last-head'>Take a look at your clients</div>
            <button onClick={()=>window.location.href='/contact'} data-aos="fade-up"
                data-aos-duration="700" data-aos-delay="400" id='last-btn'>CUSTOMERS</button>
            <Footer />
        </>
    )
}

export default Channels;
