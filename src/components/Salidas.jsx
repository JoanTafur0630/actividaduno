import React from 'react';
import Data from '../archivos/users.json';
import BotonEditar from './Button/ButtonE';
import ModalVentas from './ModalVentas';

const Salidas = () => {

    return (

        <div>
            <div className="card-body" >
                <form>

                    <div className="form-group row">
                        <label className="col-sm-2  col-form-label">Producto</label>
                        <div className="col-sm-4">
                            <input type="text" id="txtProducto" className="form-control" />
                        </div>

                        <label className="col-sm-2 col-form-label">Número de factura</label>
                        <div className="col-sm-4">
                            <input type="text" id="txtCodProducto" className="form-control" />

                        </div>
                        <br />
                        <br />

                        <div className="align-items-end">
                        <button type="button" className="btn btn-custom-buscar me-2" id="btnBuscar" style={{
                        backgroundColor: "lightblue",
                    }}>
                                <span>
                                    <i className="la la-search"></i>
                                    <span>Buscar</span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-custom-limpiar me-2" id="btnLimpiar" style={{
                        backgroundColor: "lightblue",
                    }}>
                                <span>
                                    <i className="la la-close"></i>
                                    <span>Limpiar</span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-custom-nuevo me-2" id="btnNuevo" data-bs-toggle="modal" data-bs-target="#modalSalida" style={{
                        backgroundColor: "lightblue",
                    }}>
                                <span>
                                    <i className="la la-close"></i>
                                    <span>Nuevo</span>
                                </span>
                            </button>
                        </div>
                    </div>


                </form>
                <br></br>
                <div className="table-responsive">
                    <table id="tblEntradas" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Producto</th>
                                <th>Factura</th>
                                <th>Fecha</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.producto}</td>
                                        <td>{user.numfactura}</td>
                                        <td>{user.fecha}</td>
                                        <td>{user.salida}</td>
                                        <td><div className="text-center">
                                            <BotonEditar id="#modalSalida" />
                                        </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div >
            </div>
            <ModalVentas />
        </div>
    );
}

export default Salidas
