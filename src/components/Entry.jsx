import React from 'react'
import BotonEditar from '../components/Button/ButtonE';
import ModalEntrada from './ModalE';
import Data from '../archivos/Entradas.json';

const Entradas = () => {
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
                    <input type="text" id="txtNumFactura" className="form-control" />

                </div>
                <br/>
                <br/>
               
                <div className="align-items-end">
                    <button type="button" className="btn btn-primary me-2" id="btnBuscar" style={{
                        backgroundColor: "lightblue",
                        border: "0px"
                    }}>
                        <span>
                            <i className="la la-search"></i>
                            <span style={{
                                color: "black"
                            }}>Buscar</span>
                        </span>
                    </button>
                    <button type="button" className="btn btn-secondary me-2 " id="btnLimpiar" style={{
                        backgroundColor: "lightblue",
                        border: "0px"
                    }}>
                        <span>
                            <i className="la la-close"></i>
                            <span style={{
                                color: "black"
                            }}>Limpiar</span>
                        </span>
                    </button>
                    <button type="button" className="btn btn-info me-2 " id="btnNuevo" data-bs-toggle="modal" data-bs-target="#modalEntrada" style={{
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
                        <th>Número de Factura</th>
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
                                        <td>{user.factura}</td>
                                        <td>{user.fecha}</td>
                                        <td>{user.cantidad}</td>
                                        <td><div className="text-center">
                                            <BotonEditar id="#modalSalida"/>
                                        </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
            </table>
        </div >
    </div>
    <ModalEntrada/>
</div>
  )
}

export default Entradas
