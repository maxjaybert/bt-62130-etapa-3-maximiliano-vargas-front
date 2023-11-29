import React, { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'



const Card = ({ producto }) => {
    const { agregarCarritoContext } = useContext(CarritoContext)
    // console.log(producto)

    const handleClick = (e) => {

        agregarCarritoContext(producto)
    }

    return (
        <>


            <a href="#" className="card" onClick={handleClick}> {/* <!-- card --> */}
                <article className="card__article">
                    <div className="card__image-container">
                        <img src={producto.foto} alt={producto.nombre} className="card__image" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__heading">{producto.nombre}</h2>
                        <div className="card__description">
                            <p>{producto.detalles}</p>
                        </div>
                        <button onClick={() => handleClick(producto)} className='boton-agregar'>Agregar</button>
                    </div>
                </article>
            </a> {/* <!-- card -->
*/}
        </>


    )
}

export default Card