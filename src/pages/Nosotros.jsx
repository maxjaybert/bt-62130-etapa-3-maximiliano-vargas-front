import React from 'react'
import './Nosotros.scss'



const Nosotros = ({ extras }) => {
    return (
        <div className="nosotros">
            <div className="nosotros__image-container">
                <img src="img/aeropuerto.webp" className="nosotros__image_1" />
                {/* <img src={extras.foto1} className="nosotros__image" /> */}
            </div>

            <div className="nosotros__text">
                <h1>¿QUIÉNES SOMOS?</h1>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Somos una empresa especializada en la importación y venta de tecnología. Nos esforzamos por ofrecer una amplia cartera de los últimos productos que salen al mercado.
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Somos una empresa que fue fundada hace 5 años a partir de poder tener acceso a lo último en celulares que no ingresaban al país. Luego, ante la alta demanda de gadgets, decidimos ampliar nuestra cartera de productos como fundas, vidrios templados y auriculares. Con el tiempo, hemos expandido nuestro negocio para ofrecerles una amplia gama de productos para que puedan ofrecerlos en sus comercios.
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Nosotros valoramos la calidad, la sostenibilidad y el servicio al cliente. Trabajamos con proveedores locales y utilizamos un sistema de seguimiento personalizado, desde que el producto llega a nuestro almacén, pasa por nuestro centro de distribución en Buenos Aires, hasta llegar a tu domicilio.
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    Nuestra visión es convertirnos en un referente en la venta de tecnología a nivel nacional, ofreciendo un servicio excepcional y productos de calidad con garantía.
                </p>
                <div className='separadores'></div>

                <p className="nosotros__text-parrafo">
                    ¡Estamos siempre dispuestos a ayudarte! Puedes contactarnos a través de nuestro correo electrónico, teléfono o cualquiera de nuestras redes sociales.
                </p>
                <div className='separadores'></div>
            </div>

            <div className="nosotros__image-container">
                <img src="img/compras.webp" className="nosotros__image_2" />
                {/* <img src={extras.foto1} className="nosotros__image" /> */}
            </div>
        </div>
    );
}

export default Nosotros