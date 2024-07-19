import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";




function PanelControl() {

  let link = import.meta.env.VITE_API_PRODUCTOS;

  const [obras,setObras] = useState([]);

  useEffect(()=>{

    axios.get(link).then(response=>{
      setObras(response.data);
    })

  })
  return (

    <section className='obras'>

    {obras.map(obra=>{
      return <div key={obra.id} className='obras__contenedor'>

        <h2 className='obras__nombre'>Name: {obra.nombre}</h2>
        <p>Price: {obra.precio}k</p>
        <Link className='papelera' to={'/borrarObra/'+ obra.id} ><CiTrash /></Link>
        &nbsp;
        <Link to={'/editarObra/'+ obra.id} className='pencil'><HiOutlinePencilSquare /></Link>
        

      </div>

    })}

    <p className='add'>Add new Artwork:<Link to={'/nuevaObra'} className='add__boton'><br/><CiCirclePlus /> </Link> </p>


      
    </section>
  )
}

export default PanelControl
