import React from 'react';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Slider from "react-slick";
import { logo } from '../img';
import SocialMedia from './SocialMedia';


function Empaty({ onClick }) {
    return (
        <div onClick={onClick} className='arrow-Conatiner arrow-right'>

        </div>
    );
}
function SampleNextArrow({ onClick }) {
    return (
        <div onClick={onClick} className='arrow-Conatiner arrow-right'>
            <SlArrowRight />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <div onClick={onClick} className='arrow-Conatiner arrow-left'>
            <SlArrowLeft />
        </div>
    );
}
const Carousel = ({ items, initialActive }) => {
    const [CarousellIndex, setCarouserlIndex] = useState(0);
    const containerStyles = {
        height: '100vh',
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setCarouserlIndex(next),
        centerMode: true,
        nextArrow: <Empaty />,
        prevArrow: <Empaty />,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />
                },

            },
        ]
    };
    return (
        <div style={containerStyles} data-aos="fade-up"
            data-aos-duration="500" id='galley' >
            <div className='containerInfo'>
                <div className='height100'>
                    <div className='logoErick' data-aos="fade-up"
                        data-aos-duration="500">
                        <img src={logo} className="logo" />
                    </div>
                </div>
                <div className='containerGallery'>

                    <div className='carousel ' data-aos="fade-up"
                        data-aos-duration="500" >
                        <Slider {...settings} >
                            {
                                items.map((item, index) => (
                                    <div className={index === CarousellIndex ? 'carouselSlide carouselSlide-active ' : 'carouselSlide'} key={item.id}>
                                        <img src={item.url} alt="" />
                                        <div className='categoryGallery'>
                                            <p>{item.category}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                        <div className='containerButtonPls'>
                            <button className='buttonPlus'>VER MÁS</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerSocialMedia' >
                <div className='height100'>
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
};

export default Carousel;