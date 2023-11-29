import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo-container">
                    <h3 className='footer-items'>Excellence Import</h3><FontAwesomeIcon icon={faTruckFast} size="2xl" />
                </div>
                <div className="footer__column">
                    <h3>Acerca de Excellence Import</h3>
                    <ul>
                        <li>Sobre Nosotros</li>
                        <li>¿Quienes Somos?</li>
                        <li>¿Cuanto demora la entrega?</li>
                        <li>Quienes nos eligen</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className='footer-items'>Contactenos</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faLocationDot} size="lg" /> Dirección</li>
                        <li><FontAwesomeIcon icon={faPhone} size="lg" /> Telefono</li>
                        <li><FontAwesomeIcon icon={faClock} size="lg" /> Nuestro Horarios</li>
                        <li><FontAwesomeIcon icon={faUsers} size="lg" /> Atención al Público</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className='footer-items'>Nuestras Redes</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faTwitter} size="lg" /> /twitter</li>
                        <li><FontAwesomeIcon icon={faInstagram} size="lg" /> /instagram</li>
                        <li><FontAwesomeIcon icon={faTiktok} size="lg" /> /tiktok</li>
                        <li><FontAwesomeIcon icon={faDiscord} size="lg" /> /discord</li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer