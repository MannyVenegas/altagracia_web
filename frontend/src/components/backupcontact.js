import React, { useState } from 'react'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, lastName ,phone, email, subject, description } = e.target.elements;
    let details = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      description: description.value,
    };
    console.log(details)
      fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(details) 
    })
     .then(res => res.text())
     .then(text => console.log(text))
     .catch(error => console.log(error));
  };

  return (
    <div id='contact' className='contact-us'>
      <div className='text-center'>
        <h1>Contacto</h1>
        <p>Escríbenos y obten tu presupuesto.</p>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit} >
          <div className='row'>
            <div className='col-md-10 co col-xs-12'>
              <div className='text-center'>
                <input type="text" id="name" className='form-input' required placeholder='Nombre:'/>
              </div>
              <div className='text-center'>
                <input type="text" className='form-input' id='lastName' required placeholder='Apellido:'/>
              </div>
              <div className='text-center'>
                <input id="phone" type="text" className='form-input' placeholder='Teléfono:'/>
              </div>
              <div className='text-center'>
                <input id="email" type="email" className='form-input'
                  placeholder="Email" required />
              </div>
              <div className='text-center'>
                <input id="subject" type="text" className='form-input'
                  placeholder="Asunto" />
              </div>
              <div className='col-md-6 co col-xs-12'>
                <div className='text-center'>
                  <textarea id="description" type="text" className='form-input'
                    placeholder="Descripción del trabajo"></textarea>
                  <button className='btn-main-offer contact-btn' type='submit'>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
  }

export default Contact