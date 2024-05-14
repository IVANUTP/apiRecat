import React from 'react'
import Componente2 from './componente2'

function AllQuallity() {
  return (
    <>
        <div className=' container text-center'><h4>Aplicacion de la calidad del Aire</h4>
            <br />
            <div className='card'>
                <div className='card-header'>
                    <div className='text-center'>
                        <h6 className='card-title'>Datos del Aire</h6>
                    </div>
                     
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-xs-12'>
                           <Componente2 valor={10} texto='C0' icono="far fa-paper-plane" color="bg-secondary" />
                      
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-12'>
                           <Componente2 valor={10} texto='C0' icono="fas fa-arrow-circle-right" color="bg-orange" />
                      
                        </div>
                    </div>
                    
                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary'>Aceptar</button>
                    <button className='btn btn-secondary float-right'>Cancerlar</button>
                </div>

            </div>
        </div>
    </>

  )
}

export default AllQuallity