import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function EditarObra() {

    const [editar,setEditar] = useState({ nombre: '', descripcion: '', precio: '' });

    let {id} = useParams();

    const navega = useNavigate();

    useEffect(()=>{

        fetch('http://localhost:3000/productos/id?id='+id)
        .then(res=>res.json())
        .then(data=>{

           setEditar(data);

        })

    },[])

    function editaValor(e){
        let nombreCampo = e.target.name;

        let valor = e.target.value;

        setEditar({...editar,[nombreCampo]:valor})
    }

    function editarCampo(e){
        e.preventDefault();

        let opciones = {
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editar)
        }

        fetch('http://localhost:3000/productos',opciones)
        .then(res=>res.json())
        .then(data=>{
            if(data.mensaje == 'Ok'){

                navega('/obras')

            }
        })
    }



  return (

    <section className='editar'>
    <div className='editar__contenedor'>
      <form action="#" method="post" onSubmit={editarCampo}>

        <label  className='editar__label' htmlFor="nom">Name:</label>
        <input className='editar__input' type="text" name="nombre" id="nom" value={editar.nombre}  onChange={editaValor}/> <br />

        <label className='editar__label' htmlFor="descripcion">Description:</label>
        <textarea className='editar__input' name="descripcion" id="desc" cols="30" rows={9} value={editar.descripcion} onChange={editaValor}></textarea> <br />

        <label className='editar__label' htmlFor="pre">Price:</label>
        <input className='editar__input' type="number" name="precio" id="pre" value={editar.precio} onChange={editaValor}/> <br />

        <input className='editar__boton' type="submit" value="Edit" />

    </form>  
    </div>
      
    </section>
  )
}

export default EditarObra
