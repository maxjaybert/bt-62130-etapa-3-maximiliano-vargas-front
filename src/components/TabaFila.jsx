import React, { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'

const TabaFila = ({ producto, setProductoAEditar }) => {
    const { eliminarProductoContext } = useContext(ProductoContext)

    const handleDelete = (id) => {
        let isDelete = window.confirm(
            `Estas seguro de eliminar el producto con el 'id': ${id}`)

        if (isDelete) {
            eliminarProductoContext(id)
        } else {
            return
        }
    }

    const handleUpdate = (producto) => {
        setProductoAEditar(producto)
    }

    return (
        <tr>
            <td className='td-nombre'>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.marca}</td>
            <td>{producto.categoria}</td>
            <td>{producto.detalles}</td>
            <td><img id="img-row" src={producto.foto} alt={producto.nombre} /></td>
            <td>{producto.envio ? 'SI' : 'NO'}</td>
            <td>
                <button onClick={() => handleUpdate(producto)}>Editar</button>
                <button onClick={() => handleDelete(producto.id)}>Borrar</button></td>
        </tr>
    )
}

export default TabaFila