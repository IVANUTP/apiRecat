import React from 'react'

function Componente2({valor,texto,color,icono}) {
  return (
   <>
      <div className="row">
            <div >

                <div className={`small-box ${color}`}>
                    <div className="inner">
                    <h3>{valor}</h3>
                    <p>{texto}</p>
                    </div>
                    <div className="icon">
                    <i class={icono}></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className={icono}></i></a>
                </div>
            </div>
            

           

        </div>
   </>
  )
}

export default Componente2