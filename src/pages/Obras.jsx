import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Obras() {

  let link = import.meta.env.VITE_API_PRODUCTOS;

  const [obras,setObras] = useState([]);

  useEffect(()=>{

    axios.get(link).then(response=>{
      setObras(response.data);
    })

  })
  return (


    <main>

      <section className='obras'>

        {obras.map(obra=>{
          return <article className='obras__contenedor' key={obra.id}>

            <h2 className='obras__nombre'>{obra.nombre}</h2>
            <div>
              <img className='obras__imagen' src={'http://localhost:3000/'+obra.imagen} alt="Artworks" />
            </div>
            <p className='obras__descripcion'>{obra.descripcion}</p>
            <p className='obras__genero'>Genre: {obra.genero}</p>
            <p className='obras__precio'>Price: {obra.precio}k</p>



          </article>
        })}
        
      
      </section>
      
    </main>
  )
}

export default Obras
