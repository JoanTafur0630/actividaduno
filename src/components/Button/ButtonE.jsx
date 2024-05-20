import React from 'react'
import ModalSalida from '../ModalVentas'



const BotonEditar = ({id}) => {
    return (
        <div>         
            <button className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target={id}>
                Editar
            </button>
            <button className="btn btn-danger me-2">
                Eliminar
            </button>
            <ModalSalida/>
        </div>
    )
}

export default BotonEditar
