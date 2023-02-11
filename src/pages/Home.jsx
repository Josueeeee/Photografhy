import React, { useState } from 'react';
//img
import ImagenesSlide from '../ImagenesSlide.json'
import GalleryImagenes from '../GalleryImagenes.json'
// componentes
import { Slider, Navbar, SocialMedia, Aboutme, Carousel, Contact, Footer } from '../components/index'
// // // import Loading from '../img/logoErick2.svg';
// // import { ReactComponent as Logo } from "../img/logoErick2.svg";
import AOS from 'aos';
// CSS
import 'aos/dist/aos.css';
import '../styles/home.css';
import '../styles/socialMedia.css'
import '../styles/burguerbuttom.css'
import '../styles/aboutme.css'
import '../styles/carrousell.scss'
import '../styles/contac.css'
import '../styles/formContact.css'
import '../styles/Footer.css'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';

// Animación de scroll
AOS.init();
const Home = () => {
    const containerStyles = {
        height: '100vh',
    }
    //Pantalla
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    return (
        <div id='home'>
            <div className='containerHome' >
                <Navbar parentWidth={width} />
                <SocialMedia />
                <div style={containerStyles}>
                    <Slider slides={ImagenesSlide} parentWidth={width} />
                </div>
            </div>
            <Aboutme parentWidth={width} />
            <Carousel items={GalleryImagenes} initialActive={0} />
            <Contact />
            <Footer />
        </div >
    );
};

export default Home;