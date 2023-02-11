import React from 'react';
import { SlCallEnd, SlEnvolope, SlLocationPin } from 'react-icons/sl';
import { logo } from '../img';
import SocialMedia from './SocialMedia';

const Contact = () => {
    const containerStyles = {
        height: '100vh',
    }
    return (
        <div  id='contact'>
            <div className='containerContact'>
                <div className='height100'>
                    <div className='logoErick' data-aos="fade-up"
                        data-aos-duration="500">
                        <img src={logo} className="logo" />
                    </div>
                </div>
                <div className='containerInfoContact'>
                    <div className='containerForm'>
                        <div className='title' data-aos="fade-up"
                            data-aos-duration="500" >
                            <p>CONTÁCTAME</p>
                        </div>
                        <div>
                            <div className='containerInfoContact' data-aos="fade-up"
                                data-aos-duration="500" >
                                <div className='socialContac'>
                                    <div className='con'>
                                        <SlLocationPin className='icons' />
                                        <div>
                                            <p>Direccion</p>
                                            <p className='fs-14'>Santa Rosa de copan, Honduras, C.A</p>
                                        </div>

                                    </div>
                                    <div className='con'>
                                        <SlCallEnd className='icons' />
                                        <div>
                                            <p>celular</p>
                                            <p className='fs-14'>+504 0000-0000</p>
                                        </div>

                                    </div>

                                    <div className='con'>
                                        <SlEnvolope className='icons' />
                                        <div>
                                            <p> Email</p>
                                            <p className='fs-14'>email@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='formBack'>
                                    <form >
                                        <div className='form' >
                                            <input type="text" required />
                                            <label className="lbl-nombre">
                                                <span className="text-nomb">NOMBRE</span>
                                            </label>
                                        </div>
                                        <div className='form' >
                                            <input type="text" required />
                                            <label className="lbl-nombre">
                                                <span className="text-nomb"> NÚMERO DE TELÉFONO</span>
                                            </label>
                                        </div>
                                        <div className='form' >

                                            <input type="text" required />
                                            <label className="lbl-nombre">
                                                <span className="text-nomb">EMAIL</span>
                                            </label>
                                        </div>
                                        <div className='formArea' >
                                            <textarea name="mesaje" id="" cols="30" rows="10" />
                                            <label className="lbl-area">
                                                <span className="text-area">MENSAJE</span>
                                            </label>
                                        </div>
                                        <div className='containerButtonPls'>
                                            <button className='buttonPlus'>ENVIAR MENSAJE</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerSocialMediaS'  >
                <div className='height100'>
                    <div className='socialMedia' >
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
                </div>
            </div>
        </div>
    );
};

export default Contact;