import Reac  from 'react'

//https://api.waqi.info/feed/here/?token=d51b299b0084210135008590b76896307609544b



function Componente2({valor,texto,color,icono,descripcion}) {


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
                    <a href="#" className="small-box-footer">{descripcion}</a>
                </div>
            </div>

        </div>
   </>
  )
}

export default Componente2