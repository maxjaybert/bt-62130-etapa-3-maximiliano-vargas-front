import React, { useContext } from 'react'
import './Inicio.scss'
import Card from '../components/Card'
import ProductoContext from '../contexts/ProductoContext'

import SliderTop from '../components/Slider'



const Inicio = () => {
    const { productos } = useContext(ProductoContext)

    return (
        <>

            <main>



                <section className="section-cards"> {/* <!-- section-cards --> */}
                    <header className="section-cards__header">
                        <h1 className='header-promo'>SEMANA DE DESCUENTOS</h1>
                        <p className="texto-1">Hasta un 50% OFF en nuestros productos seleccionados.</p>
                        <br />
                        <p className="texto-2">Solo valido del 1/9 al 15/9 o hasta agotar stock.
                            <br />Ver promociones bancarias.
                        </p>
                    </header>
                    <SliderTop />
                    <div className="cards-conteiner"> {
                        productos && productos.map((producto, idx) => (<Card key={idx} producto={producto} />))
                    }



                    </div> {/* <!-- cards-conteiner --> */}

                </section> {/* <!-- section-cards --> */}
            </main>


            <script type="module" src="/main.js"></script>
        </>
    )
}

export default Inicio