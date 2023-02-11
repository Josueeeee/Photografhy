import React, { useCallback, useEffect, useState } from 'react';
import logo from '../img/Logo ErickVentura-04.png'

const Navbar = ({ parentWidth }) => {
    const [toggle, setToggle] = useState(false);

    const clickActive = () => {
        setToggle(!toggle)
    }
    const clikedlink = () => {
        setToggle(false)
    }
    const toggleCSs = {
        position: 'absolute',
        background: 'black',
        height: '100vh',
        width: `${parentWidth}px`,
        zIndex: '1',
        opacity: '0.5'
    }
    const [y, setY] = useState(document.scrollingElement.scrollHeight);

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {

        } else if (y < window.scrollY) {
            setToggle(false)
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div className='containerNavbar' >
            <div className='containerLogo' >
                <img src={logo} className="logo" />
            </div>
            <ul className={`menu ${toggle ? 'active' : ''}`}>
                <a href='/' className={`link  ${toggle ? 'active' : ''}`} onClick={clikedlink}>Inicio</a>
                <a href='#aboutme' className={`link  ${toggle ? 'active' : ''}`} onClick={clikedlink} >Acerca de mi</a>
                <a href='#galley' className={`link  ${toggle ? 'active' : ''}`} onClick={clikedlink}>Galeria</a>
                <a href='#contact' className={`link  ${toggle ? 'active' : ''}`} onClick={clikedlink}>Contacto</a>
            </ul>
            <div className="burguer" >
                <div onClick={clickActive} className={`icon nav-icon-5 ${toggle ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div style={toggle ? toggleCSs : { display: 'none' }} >
            </div>
        </div >
    );
};

export default Navbar;