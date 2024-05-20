import React from 'react'

const ModalProducto = () => {
    return (
        <div>
            <div className="modal fade" id="modalProducto" data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Adicionar nuevo producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                               
                                    <div className="form-group row mb-3">
                                        <label className="col-sm-2  col-form-label">Producto</label>
                                        <div className="col-sm-4">
                                            <input type="text" id="txtProducto" className="form-control" />
                                        </div>

                                        <label className="col-sm-2 col-form-label">Código Producto</label>
                                        <div className="col-sm-4">
                                            <input type="text" id="txtCodProducto" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <label className="col-sm-2  col-form-label">Número de lote</label>
                                        <div className="col-sm-4">
                                            <input type="text" id="txtLote" className="form-control" />
                                        </div>

                                    </div>
                               

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default ModalProducto
