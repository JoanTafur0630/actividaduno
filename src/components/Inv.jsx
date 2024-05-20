import React from 'react';
import Data from '../archivos/Productos.json';
import BotonEditar from './Button/ButtonE';
const Inventario = () => {
    return (
        <div>
            <div className="card-body" >
                <form>

                    <div className="form-group row">
                        <label className="col-sm-2  col-form-label">Producto</label>
                        <div className="col-sm-4">
                            <input type="text" id="txtProducto" className="form-control" />
                        </div>

                        <label className="col-sm-2 col-form-label">Código Producto</label>
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
                            
                        </div>
                    </div>
                </form>
                <br></br>
                <div className="table-responsive">
                    <table id="tblInventario" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Producto</th>
                                <th>Entrada</th>
                                <th>Salida</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.producto}</td>
                                        <td>{user.entrada}</td>
                                        <td>{user.salida}</td>
                                        <td>{user.stock}</td>
                                        <td><div className="text-center">
                                            <BotonEditar id="#modalInventario"/>
                                        </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div >
            </div>
            
        </div>
    )
}

export default Inventario
