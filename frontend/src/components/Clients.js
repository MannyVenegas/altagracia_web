import React from 'react';
import img from '../cafe.jpg'
import img2 from '../party.jpg'
import img3 from '../cafeteria.jpg'
import img4 from '../copas.jpg'

const Clients = () => {
  return (
    <>
    <h1 className='clients-title'>Nuestros servicios</h1>
    <section className='clients-container'>
      <div className='clients c1'>
        <img alt='icon' src={img}/>
        <h3>Coffee Break</h3>
        <p>Ofrecemos nuestros servicios de coffee break para reuniones institucionales o ejecutivas, con variedad de ofertas y posibilidades.</p>
      </div>
      <div className='clients c2'>
        <img alt='icon' src={img3}/>
        <h2>Cafetería</h2>
        <p>Ofrecemos servicios de operación de espacios de cafetería en edificios institucionales o privados.</p>
      </div>
      <div className='clients c3'>
        <img alt='icon' src={img4}/>
        <h2>Eventos</h2>
        <p>Ofrecemos servicios de renta de mobiliario y equipo para eventos institucionales y ejecutivos.</p>
      </div>
      <div className='clients c4'>
        <img alt='icon' src={img2}/>
        <h2>Box Lunch</h2>
        <p>Ofrecemos servicios de box lunch de acuerdo a sus necesidades y presupuesto con variedad de opciones. </p>
      </div>
    </section>
    </>
  )
}

export default Clients