import React, { useEffect, useState } from 'react'
import Componente2 from './componente2'

function AllQuallity() {
    const token='d51b299b0084210135008590b76896307609544b';

    const [city, setCity] = useState('Puebla');
    const [aqi,staAqi]=useState(0);
    const [source,setsource]=useState('SNICA');
    const [station, setstation] = useState('Conocida');
    const [co, setco] = useState(0)
    const [dew, setdew] = useState(0)
    const [h, seth] = useState(0)
    const [no2, setno2] = useState(0)
    const [o3, seto3] = useState(0)
    const [time, settime] = useState('')
     const [scale, setscale] = useState(['primary','desconocido'])
    const getAQ=async()=>{
  
      const url=`https://api.waqi.info/feed/here/?token=${ token }`;
      const response=await fetch(url);
      const data= await response.json();
  
      console.log(data);
  
      setCity(data.data.city.name);
      staAqi(data.data.aqi);
      setsource(data.data.attributions[0])
      settime(data.data.time.s)
      //setscale(getSacale(data.data.aqi))
      setscale(getSacale(50));

  
    }
    const getSacale=(aqi)=>{
       let color="";
       let nivel="";
       let mensaje=""
       switch (true) 
       {
        case aqi>=0 && aqi<=50:
            color="success"
            nivel="Buena"
            mensaje="No se anticipan impactos a la salud cuando la calidad del aire se encuentra en este intervalo."
            break;

            case aqi>=51 && aqi<=100:
                color="warning"
                nivel="Moderado"
                mensaje="Las personas extraordinariamente sensitivas deben considerar limitación de los esfuerzos físicos excesivos y prolongados al aire libre."
                break;
                
                case aqi>=101 && aqi<=150:
                    color="orange"
                    nivel="Dañino para la salud de grupos sensitivos"
                    mensaje="Los niños y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos físicos excesivos y prolongados al aire libre."
                
                break;
                    case aqi>=151 && aqi<=200:
                        color="danger"
                        nivel="Dañino para la salud "
                        mensaje="Los niños y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos excesivos prolongados al aire libre; las demás personas, especialmente los niños, deben limitar los esfuerzos físicos excesivos y prolongados al aire libre."
                    
                    break;
                        case aqi>=201 && aqi<=300:
                            color="purple"
                            nivel="Muy dañino para la salud "
                            mensaje="Los niños y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar todos los esfuerzos excesivos al aire libre; las demás personas, especialmente los niños, deben limitar los esfuerzos físicos excesivos al aire libre."
                        
                        break;
                        
        default:
            color="marron"
             nivel="arriesgado"
             mensaje="muerte"
            break;
       }
       return [color,nivel,mensaje]
    }
    
    useEffect(()=>{  
      getAQ();
    },[])
  
  return (
    <>
        <div className=' container text-center'><h4>Aplicacion de la calidad del Aire</h4>
            <br />
            <div className='card'>
                <div className='card-header'>
                    <div className='text-center'>
                        <h6 className='card-title'>{city}</h6>
                    </div>
                     
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-xs-12'>
                           <Componente2 valor={aqi} texto='C0' icono="far fa-paper-plane" color={`bg-${scale[0]}` } descripcion={scale[1]}/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-12'>
                           <p>Fuente:  <a href={source.url} target='blank' title='Ir al sitio'> {source.name}</a> </p>
                           <br />
                           <p>Fecha y Hora: {time}</p>
                           <br />
                           <p>{scale[2]}</p>
                      
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