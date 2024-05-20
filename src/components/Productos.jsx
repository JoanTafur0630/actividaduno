import React from 'react'
import ModalProducto from './MProduct';
import Data from '../archivos/Product.json';
import BotonEditar from './Button/ButtonE';


const Productos = () => {
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
                            <button type="button" className="btn btn-custom-nuevo me-2" id="btnNuevo" data-bs-toggle="modal" data-bs-target="#modalProducto" style={{
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
                    <table id="Productos" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Producto</th>
                                <th>Lote</th>
                                <th>Código</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.producto}</td>
                                        <td>{user.codigo}</td>
                                        <td>{user.lote}</td>
                                        <td><div className="text-center">
                                            <BotonEditar id="#modalProducto" />
                                        </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div >
            </div>
            <ModalProducto />
        </div>
    )
}

export default Productos
