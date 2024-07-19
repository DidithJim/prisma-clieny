import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

//En esta sección haremos el Carousel con 3 imágenes distintas que se visualizarán en la Página Incio.

function Carousel() {

  let array = [ 'artista-cuadro.jpg', 'artista-caballete.jpg','trazos.jpg' ]

  const [foto, setFoto] = useState(0);

  function delante(){

    if(foto == 2){
        setFoto(0)
    }else{
        setFoto(foto + 1)
    }

  }

  function atras(){

    if(foto == 0){
        setFoto(2)
    }else{
        setFoto (foto - 1)
    }

  }


  return (
    <section className='carousel'> 

    <div className='carousel__contenedor'>
        <button type="button" onClick={atras} className='carousel__boton'><SlArrowLeft /></button>
        <img src={array[foto]} alt="Art Photos from Prisma"  className='carousel__imagen'/>
        <button type="button" onClick={delante} className='carousel__boton'><SlArrowRight /></button>
    </div>
      
    </section>
  )
}

export default Carousel
