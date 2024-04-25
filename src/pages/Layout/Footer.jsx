import React from 'react'
import './styles/Footer.css'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id='footer'>
        <div className='footer__container'>
            <div className='footer__top'>
                <img src={logo} alt="Logo" className='footer__logo' />
                <div className='footer__flex2'>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>About us</Link>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>© 2024, Pet Club, All Rights Reserved.</p>
                <div className='footer__flex'> 
                    <Link className='footer__text'>Privacy Policy</Link>
                    <Link className='footer__text'>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
