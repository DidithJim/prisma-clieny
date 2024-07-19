import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UsuarioContext'

//Componente Header donde crearemos el menú de navegación, además de hacer los links del mismo.

function Header() {

  const {usuario} = useUser();

  
  return (
    <header className='header'>

        <img src="logo.png" alt="Logo Prisma" className='header__imagen'/>

        <nav className="header__nav">

            <ul className="header__lista">

                <li className="header__elementoLista"><Link to={'/'} className='header__link'>Home</Link></li>
                <li className="header__elementoLista"><Link to={'/quienes'} className='header__link'>About Us</Link></li>
                <li className="header__elementoLista"><Link to={'/obras'}> <span className='header__elementoLista--subrayado'>Art</span></Link></li>
                <li className="header__elementoLista"><Link to={'/panel'} className='header__link'>Panel</Link></li>
            </ul>


        </nav>
          
    </header>

  )

}

export default Header
