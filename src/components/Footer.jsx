import React from 'react';
import { logo } from '../img';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footerPadding' >
                <div data-aos="fade-up"
                    data-aos-duration="500">
                    <div >
                        <img src={logo} className="logo" />
                    </div>
                    <div className='socialMediaFooter'  >

                        <i class="fa-brands fa-instagram"></i>


                        <i class="fa-brands fa-facebook"></i>


                        <i class="fa-brands fa-whatsapp"></i>

                    </div>
                    <div className='reserv'>
                        <p>Terminos de privacidad</p>
                        <p>©2023 Todos los Derechos reservados</p>
                    </div>
                </div>

            </div>
            <div className='credits'>
                <p>  by: CreaWeb</p>
            </div>
        </footer>
    );
};

export default Footer;