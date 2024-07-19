import React from 'react'

function QuienesSomosEquipo() {
  return (
    <section className='equipo'>

        <div className='equipo__card'>

            <img src="equipo.jpg" alt="Equipo de Prisma Gallery Art"  className='equipo__imagen'/>
            
            <div className="equipo__contenedor">
                <h2 className='equipo__titulo'>Our Team</h2>
                <p className="equipo__texto">
                At Prisma, we are passionate about art and adore the beauty that artwork conveys. Our aim is to make art accessible to all, allowing art lovers to enjoy and acquire exceptional works of art from the comfort of their own home.
                </p>
                <p>Join us on this artistic journey! </p>
            </div>
        </div>
      
    </section>
  )
}

export default QuienesSomosEquipo
