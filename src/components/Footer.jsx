import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__linea'></div>
        <div className='footer__contenedor'>
            <ul className='footer__lista'>
                <li className='footerElemento__lista'>Instagram</li>
                <li className='footerElemento__lista'>Pinterest</li>
                <li className='footerElemento__lista'>Facebook</li>
                <li className='footerElemento__lista'>Tik Tok</li>
            </ul>
            <p>All rights reserved &copy;Prisma 2024</p>
        </div>
    </footer>
  )
}

export default Footer
