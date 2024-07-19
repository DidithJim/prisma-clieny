import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


function BotonUp() {

  function subir(){

    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        }
    ) 

  }

  function posicion(){

    if (document.documentElement.scrollTop > 100) {

        document.getElementById('botonSubir').style.display = 'block'
        
    }else{

        document.getElementById('botonSubir').style.display = 'none'


    }

  }

  window.onscroll = posicion;



  return (
    <>

    <button type="button" className='botonUp' onClick={subir} id='botonSubir'><IoIosArrowUp /></button>
      
    </>
  )
}

export default BotonUp
