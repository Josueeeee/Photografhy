import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SocialMedia = () => {
    return (
        <div>
            <div className='socialMedia' data-aos="fade-up"
                data-aos-duration="500"  >
                <div>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className='arrowContainer' >
                <i class="fa-solid fa-arrow-down-long"></i>
            </div>
        </div>
    );
};

export default SocialMedia;