import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { MdOutlineColorLens } from "react-icons/md";


//Componente Artista del Mes. Traeremos las 3 últimas obras de Gerhard Richter.

function ArtistasDelMes() {

    let link = import.meta.env.VITE_API_PRODUCTOS 

    const [tresUltimos,setTresUltimos] = useState([]);

    useEffect(()=>{

        axios.get(link+ '/latest').then(response=>{
            setTresUltimos(response.data);
        });

    },[])

  
    return (

    <section className='seccionCardsInicio'>
    <h1 className='seccionCardsInicio__titulo'>Artist Of The Month : Gerhard Richter <MdOutlineColorLens /></h1>

    {tresUltimos.map(obra =>{

        return <div key={obra.id} className='seccionCardsInicio__card'>

          <h2 className='seccionCardsInicio__nombre'>{obra.nombre}</h2>
          <p className='seccionCardsInicio__genero'>{obra.genero}</p> 
          <p className='seccionCardsInicio__descripcion'>{obra.descripcion} <br /> <br />Visit <span className='header__elementoLista--subrayado'>Art</span> to see the work.</p>


        </div>
    })}



      
    </section>

  )
}

export default ArtistasDelMes
