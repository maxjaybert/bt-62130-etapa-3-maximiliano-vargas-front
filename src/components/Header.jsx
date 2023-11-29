import React, { useContext } from 'react'
import './Header.scss'
import Navbar from './Navbar'
import CarritoContext from "../contexts/CarritoContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Slider from './Slider'







const Header = () => {

    const { carrito } = useContext(CarritoContext);
    const contadorCarrito = carrito ? carrito.length : 0;

    return (
        <header className="main-header">
            <input type="checkbox" id="menu" />

            <Navbar />

            <div className="search-bar"> {/* <!-- search-bar --> */}
                <div className="search-bar__logo-container"><FontAwesomeIcon icon={faTruckFast} size="2xl" /></div>
                <form action="" className="search-bar__form-container">
                    <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                    <input type="search" className="search-bar__form-search" id="busqueda" placeholder="Ingrese producto..." />
                    <input type="submit" value="Buscar" className="search-bar__form-submit" />
                </form>

                <Link className="search-bar__carrito-container" to="/carrito">  <div className="search-bar__carrito-contador">{contadorCarrito}</div><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Link>

                <div className="menu-toggle">
                    <label htmlFor="menu" className="menu-toogle__label">
                        <span className="menu-toggle__top-bread"></span>
                        <span className="menu-toggle__meat"></span>
                        <span className="menu-toggle__bottom-bread"></span>
                    </label>
                </div>



            </div>


        </header>

    )
}

export default Header