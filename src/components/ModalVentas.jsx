import React from 'react'

const ModalVentas = (id) => {
    return (
        <div>
            <div className="modal fade" id='modalSalida' data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Adicionar salida</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <form> */}
                                <div className="form-group row mb-3">
                                    <label className="col-sm-2  col-form-label">Producto</label>

                                    <div className="col-sm-4">
                                        <div className="form-group">
                                        <select className="form-select" aria-label="Default select example">
                                        <option selected>Seleccione un producto</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                        </div>
                                    </div>

                                    <label className="col-sm-2  col-form-label">Número de factura</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="txtNumFacturaOut" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label className="col-sm-2  col-form-label">Fecha salida</label>
                                    <div className="col-sm-4">
                                        <input type="date" id="txtFechaSalida" className="form-control" />
                                    </div>

                                    <label className="col-sm-2 col-form-label">Cantidad</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="txtCantidadSalida" className="form-control" />

                                    </div>
                                </div>

                            {/* </form> */}
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

export default ModalVentas
