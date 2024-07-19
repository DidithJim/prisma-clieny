import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//Con useParams nos aseguramos al hacer click en borrar(icono basura), de que el id corresponde con la obra que deseamos borrar.
//Implementamos una buena práctica, preguntando al usuario si está 100% seguro de querer borrarla.

function BorrarObra() {

    let {id} = useParams();
    const navegador = useNavigate();

    function noBorrar(){
        navegador('/panel');
    }

    function siBorrar(){

        let opciones = {
            method: 'DELETE'

        }

        fetch('http://localhost:3000/productos?id='+id, opciones).then(res=>res.json()).then(data=>{
            if(data.mensaje == 'Ok'){
                navegador('/obras');

            }
        })
    }


  return (

    <section className='borrar'>


    <div className='borrar__contenedor'>
        <h2 className='borrar__titulo'>Are you sure you want to delete the work with the id({id})?</h2>
        <button className='borrar__boton' type="button" onClick={siBorrar}>Yes!</button>
        <button className='borrar__boton'   type="button" onClick={noBorrar}>No</button>
    </div>
    
      
    </section>
  )
}

export default BorrarObra
