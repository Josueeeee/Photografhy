import React from 'react';
import { logo, erick } from '../img/index'
import SocialMedia from './SocialMedia';
import comentar from '../img/assets/comentar.png'
import corazon from '../img/assets/corazon.png'
import compartir from '../img/assets/compartir.png'
const Aboutme = ({ parentWidth }) => {
    const containerStyles = {
        height: '100vh',
    }
    return (
        <div style={containerStyles} data-aos="fade-up"
            data-aos-duration="500" id='aboutme' >
            <div className='containerInfo' >
                <div className='height100'>
                    <div className='logoErick'>
                        <img src={logo} className="logo" />
                    </div>
                </div>
                <div className='ContainerAboutmes'>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" >
                        <div className='title'>
                            <p>ACERCA DE MÍ</p>
                        </div>
                        <div className='informarion' >
                            <div >
                                <div className='instagramPost'>

                                </div>
                                <div className='post'>
                                    <div className='reactionsInsta'>
                                        <img src={corazon} alt="" />
                                        <img src={comentar} alt="" />
                                        <img src={compartir} alt="" />
                                    </div>
                                </div>
                                <img src={erick} alt="" className='PhotoErick' />
                            </div>
                            <div className='text'>
                                <p style={{ padding: '0rem 2rem' }}> pLorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta id optio exercitationem facere excepturi quisquam aliquam architecto nam. Impedit dicta a nobis veniam quasi vel voluptatem assumenda nihil quaerat temporibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerSocialMedia'>
                <div className='height100'>
                    <SocialMedia />
                </div>
            </div>
        </div >
    );
};

export default Aboutme;