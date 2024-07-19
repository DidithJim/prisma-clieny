import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

//En Login, implemento un inicio de sesión básico que chequea un usuario contra el servidor y maneja el estado, si el usuario es correcto la navegación te lleva a inicio.

function Login() {

  const [datos, setDatos] = useState({nombre:'', contrasena:'', error:''})

  const linkAdmin = import.meta.env.VITE_API_ADMIN

  const navegar = useNavigate();

  const {login} = useUser();

  function cambiarDatos(e){

    let valor = e.target.value;

    let nombreCampo = e.target.name;

    setDatos({...datos,[nombreCampo]:valor})
  }

  function enviarForm(e){

    e.preventDefault();

    axios.get(linkAdmin+'?nombre='+datos.nombre+'&contrasena='+datos.contrasena).then(response=>{
      if(response.data.length > 0){
        login(response.data[0]);

        navegar('/')
      }else{
        setDatos({...datos,error:'User Not Found'})
      }
    })

  }


  return (
    <section className='login'>

    <p className='login__error'>{datos.error}</p>

    <div className='login__contenedor'>
      <form action="#" method="get" onSubmit={enviarForm} >

        <label htmlFor="nom">User:</label>
        <input className='input__login' type="text" name="nombre" id="nom" onChange={cambiarDatos} />
        <br />
        <label htmlFor="pass">Password:</label>
        <input  className='input__login'  type="password" name="contrasena" id="pass" onChange={cambiarDatos} />
        <br /><br />
        <input type="submit" value="Log In" className='login__boton' />
      </form>
      <div className='usu__login'>
        <p>Read me!</p>
        <p>We have 3 users available. You can use one of them to log in and perform the CRUD tasks. Use for example: <br />User: Judith <br />Password :123456</p>
      </div>
      
    </div>

    
      
    </section>
  )
}

export default Login
