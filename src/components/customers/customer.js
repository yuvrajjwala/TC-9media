import React from 'react'
import Footer from '../Footer/Footer'
import LightHeader from '../LighHeader/LightHeader'
import './customer.css'

const customer = () => {
  document.title="Clients | 9mediaOnline";
  return (
    <div>
      <LightHeader text0="OUR CUSTOMERS" text1="A look at some of our partners transforming their business using our services." buttonText="GET STARTED"/>
        <div className='company-img-container'>
          <img src='./images/Target-logo 1.png'></img>
          <img src='./images/Citigroup-Logo 2.png'></img>
          <img id='asana' src='./images/Vector (3).png'></img>
          <img id='asana1' src='./images/Vector (4).png'></img>
          <img src='./images/9MediaOnline Remark 1.png'></img>
          <img src='./images/stroeer-logo-vector.png'></img>
          <img src='./images/yahoo.png'></img>
          <img src='./images/Microsoft-to-buy-Xandr.png'></img>
          <img src='./images/sharethrough-vector-logo-2022.png'></img>
          <img src='./images/MNRQ-Website-Casestudie-TMG-Brand-Logo-1-scaled.png'></img>
          <img src='./images/Screenshot 2022-08-31 at 3.00.png'></img>
          <img src='./images/unruly-group-ltd-logo-vector 1.png'></img>
          <img src='./images/Screenshot 2022-05-19 at 12.21.png'></img>
          <img src='./images/Screenshot 2022-05-19 at 12.20 1.png'></img>
          <img src='./images/Screenshot 2022-05-19 at 12.45 1.png'></img>
          <img src='./images/Screenshot 2022-08-31 at 3.34 1.png'></img>
          <img src='./images/Screenshot 2022-05-19 at 12.23.png'></img>
          <img src='./images/Screenshot 2022-08-31 at 3.23 1.png'></img>
          <img src='./images/Screenshot 2022-08-31 at 3.40 1.png'></img>
          <img src='./images/Screenshot 2022-08-31 at 3.37 1.png'></img>
        </div>
      <Footer/>
    </div>
  )
}

export default customer