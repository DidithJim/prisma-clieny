import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function NuevaObra() {

    const [nuevaObra,setNuevaObra] = useState({nombre:'',descripcion:'', precio:''});

    const linkProduc = import.meta.env.VITE_API_PRODUCTOS

    const navega = useNavigate();

    function cambiarCampo(e){

        let nombreCampo = e.target.name;

        let valorCampo = e.target.value;

        setNuevaObra({...nuevaObra,[nombreCampo]:valorCampo});
 

    }

    function enviarFormulario(e) {
        e.preventDefault();

        axios.post(linkProduc, nuevaObra)
        .then(response => {
            if(response.data.mensaje == 'Ok'){
                navega ('/obras') 
            }
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error con la solicitud', error);
        });
    }


  return (


    <section className='nuevaObra'>

    <div className='nuevaObra__contenedor'>

        <form action="#" method="post" onSubmit={enviarFormulario}>

        <label htmlFor="Nom">Name:</label>
        <input className='input__nueva' type="text" name="nombre" id="Nom" onChange={cambiarCampo}/> <br />

        <label htmlFor="desc">Description:</label>
        <textarea className='input__nueva' name="descripcion" id="desc" cols="30" rows={10} onChange={cambiarCampo}></textarea><br />

        <label htmlFor="pre">Price:</label>
        <input  className='input__nueva' type="number" name="precio" id="pre" onChange={cambiarCampo} />
        <br />

        <input type="submit" value="Create" className='boton__nueva' />

        </form>
    </div>
    
      
    </section>
  )
}

export default NuevaObra
