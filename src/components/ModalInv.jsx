import React from 'react'


const ModalInventario = () => {
    return (
        <div>
            <div className="modal fade" id="modalInventario" data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Editar Inventario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>                               
                                <div className="form-group row mb-3">
                                    <label className="col-sm-2  col-form-label">Producto</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Seleccione un producto</option>
                                        <option value="1">jugo</option>
                                        <option value="2">Jabon</option>
                                        <option value="3">Leche</option>
                                        <option value="3">Gaseosa</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalInventario
