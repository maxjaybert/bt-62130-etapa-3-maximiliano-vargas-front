import React from 'react'
import './Contacto.scss'

const Contacto = () => {
    return (
        <>
            <form action="" method="post" className="formulario" />
            <fieldset>
                <label for="nombre">Nombre:*</label><br />
                <input type="text" className="medida-campos" id="nombre" required /><br />

                <div className="separador"></div>

                <label for="apellido">Apellido:*</label><br />
                <input type="text" className="medida-campos" id="apellido" required /><br />

                <div className="separador"></div>

                <label for="nacionalidad">Motivo:*</label><br />
                <select name="paises" className="medida-campos" id="nacionalidad" required>
                    <option value="" disabled selected>- Seleccionar -</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Reclamos">Reclamos</option>
                    <option value="Garantia">Garantia</option>
                    <option value="Soporte-tecnico">Soporte Técnico</option>
                    <option value="Presupuesto">Presupuesto</option>
                    <option value="Otros">Otros</option>
                </select><br />

                <div className="separador"></div>

                <label for="tel">Teléfono</label><br />
                <input type="number" name="tel" className="medida-campos" id="tel" placeholder="Código de área y número" /><br />

                <div className="separador"></div>

                <label for="mail">Direccion de correo electrónico:*</label><br />
                <input type="email" name="mail" className="medida-campos" id="mail" placeholder="Ej: mail@gmail.com" required />

                <div className="separador"></div>

                <label for="garantia">Garantia*:</label><br />

                <input type="radio" id="positivo" value="si" name="opciones" required />
                <label for="positivo">Si</label>


                <input type="radio" id="negativo" value="no" name="opciones" required />
                <label for="negativo">No</label>

                <br />

                <div className="separador"></div>

                <label for="producto">Producto:*</label><br />
                <input type="text" name="producto" className="medida-campos" id="producto" placeholder="Ej: Macbook Air"
                    required />


                <div className="separador"></div>

                <label for="comentarios">Observaciones: </label><br />
                <textarea cols="30" rows="10" className="medida-campos-text"></textarea><br />
                <div className="separador"></div>



                <div id="last-checks">
                    <input type="checkbox" id="condiciones" name="condiciones" required />
                    <label for="condiciones" className="terminos-novedades">Acepto las condiciones*</label><br />

                    <input type="checkbox" id="novedades" name="novedades" checked />
                    <label for="novedades" className="terminos-novedades">Deseo recibir novedades</label>
                    <br />

                </div>
                <br />
                <br />
                <div id="botones">
                    <button type="submit">Enviar</button>
                    <button type="reset">Restablecer</button><br />
                </div>
                <br />
                <p className="campo-obligatorio">*:campo obligatorio</p>
            </fieldset>
        </>)
}


export default Contacto