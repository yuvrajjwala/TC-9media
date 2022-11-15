
import { useState } from "react";
import Slider from "react-slick";
import tv from "../../assets/img/home/image26.png";
import tv1 from "../../assets/img/home/image27.png";
import tv2 from "../../assets/img/home/image28.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testBg from "../../assets/img/home/bg-cloud.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './Testimonial.css'

const images = [tv1, tv2, tv];

function Testimonial() {
  if(window.innerWidth > 1100 ){
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      // slidesToShow: 3,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 2.33,
      centerMode: true,
      centerPadding: 10,
      beforeChange: (current, next) => setImageIndex(next),
    };
  }
  else{
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      // slidesToShow: 3,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 10,
      beforeChange: (current, next) => setImageIndex(next),
    };
  }

  const slidesData = [
    {
      id: 1,
      img: tv1,
      heading: 'Milena Yankova',
      subHead: 'Pharos',
      content1: `If you’re thinking about working with 9MediaOnline then you absolutely should. They are pioneers in their field and the company’s staff is beyond reproach. Our relationship with 9MO is a partnership based on mutual reliability and respect. We’ve managed to considerably boost our profits thanks to this company, and we couldn’t be happier with their work. We can’t rate them highly enough, so rest assured that 9MediaOnline is one of the best at what it does.`,
      content2:''
    }, {
      id: 2,
      img: tv,
      heading: 'Sofi Girich',
      subHead: 'SmartLine TV',
      content1: `At SmartlineTV we are always looking for reliable partners from the demand and supply side. For 3 years we have been working with 9MediaOnline, selling CTV inventory to them, we performed extremely and got access to premium advertisers, relevant for the publishers we’re working with.`,
      content2:`Throughout this process, we have been impressed with the quality of their work and the professional attitude of their staff. They perfectly meet payment deadlines and the results of our 3-year cooperation are astonishing. Overall we’re pleased with mutual cooperation and we strongly recommend working with 9MediaOnline.`
    }, {
      id: 3,
      img: tv2,
      heading: 'Arlyna Yanti',
      subHead: 'Freewheel',
      content1: `We appreciate our partnership with 9MediaOnline thanks to their professionalism and understanding of our needs.`,
      content2:''
    },
  ];
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="App1">
     

      <div className="slider-wrapper">
      <img id="img-test" src={testBg}></img>
        <Slider {...settings}>

          {slidesData.map((slide, idx) =>

            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={slide.id}>
              
              <div className="card">
                <div className="cardHead">
                  <img src={slide.img} alt='' className="cardImg" />
                  <div className="headContent">
                    <div className="headBold">{slide.heading}</div>
                    <div className="headLight">{slide.subHead}</div>
                  </div>
                </div>
                <div className="cardBody">
                  {slide.content1}
                </div>
                <div className="cardBody">
                  {slide.content2}
                </div>
              </div>
            </div>

          )}

        </Slider>

      </div>

    </div>
  );
}

export default Testimonial;




