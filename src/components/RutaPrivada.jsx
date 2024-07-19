import React from 'react'
import { useUser } from '../context/UsuarioContext'
import { Navigate } from 'react-router-dom';


//Si el usuario no se ha logueado, directamente le manda al componente Login.
function RutaPrivada({componente}) {

    const {usuario} = useUser();


return (
   <>
  
    {usuario == null ?

    <Navigate to={'/login'}/>

    : 
    
    componente
    
    
    }


   
   
   </>
  )
}

export default RutaPrivada
