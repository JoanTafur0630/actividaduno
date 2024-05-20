import React, { useState, useEffect } from 'react';

const ModalEntrada = () => {
    const [producto, setProducto] = useState('');
    const [numFactura, setNumFactura] = useState('');
    const [fechaEntrada, setFechaEntrada] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [mensajeValidacion, setMensajeValidacion] = useState('');

    useEffect(() => {
        const validateForm = () => {
            if (!producto || !numFactura || !fechaEntrada || !cantidad) {
                setMensajeValidacion('Todos los campos son requeridos');
            } else {
                setMensajeValidacion('Formulario completado.');
            }
        };

        validateForm();
    }, [producto, numFactura, fechaEntrada, cantidad]);

    // Agrega tus funciones de manejo de cambios de estado aquí
    const handleProductoChange = (e) => setProducto(e.target.value);
    const handleNumFacturaChange = (e) => setNumFactura(e.target.value);
    const handleFechaEntradaChange = (e) => setFechaEntrada(e.target.value);
    const handleCantidadChange = (e) => setCantidad(e.target.value);
    
    // También puedes definir funciones para manejar acciones dentro del modal, como guardar los datos
    const handleGuardar = () => {
        if (mensajeValidacion === 'Formulario completado.') {
            // Mostrar el mensaje de la consola solo si la validación es true
            console.log('Guardando datos...');
        }
    };
    const validationClassName = mensajeValidacion ? (mensajeValidacion.includes('requeridos') ? 'alert alert-danger' : 'alert alert-info') : '';

    return (
        <div>
            <div className="modal fade" id="modalEntrada" data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Adicionar mercancia</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Mercancia</label>
                                <div className="col-sm-4">
                                    <select className="selectpicker form-control" value={producto} onChange={handleProductoChange}>
                                        <option>Seleccione un producto</option>
                                        <option>jabon</option>
                                        <option>pan</option>
                                        <option>gaseosa</option>
                                        <option>leche</option>
                                        <option>cerveza</option>
                                    </select>
                                </div>
                                <label className="col-sm-2 col-form-label">Número de factura</label>
                                <div className="col-sm-4">
                                    <input type="text" id="txtNumFacturaIn" className="form-control" value={numFactura} onChange={handleNumFacturaChange} />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Fecha entrada</label>
                                <div className="col-sm-4">
                                    <input type="date" id="txtFechaEntrada" className="form-control" value={fechaEntrada} onChange={handleFechaEntradaChange} />
                                </div>
                                <label className="col-sm-2 col-form-label">Cantidad</label>
                                <div className="col-sm-4">
                                    <input type="text" id="txtCantidadEntrada" className="form-control" value={cantidad} onChange={handleCantidadChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleGuardar}>Guardar</button>
                        </div>
                    </div>
                    <div className={validationClassName}>{mensajeValidacion}</div>
                </div>
            </div>
            
        </div>
    );
}

export default ModalEntrada;
