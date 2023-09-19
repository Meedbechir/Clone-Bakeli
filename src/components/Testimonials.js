import React from 'react';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';

const Testimonials = () => {
  return (
    <div className='container-fluid pt-5 mt-5 bgs testimonials'>

      <p className='text-white'>Nos étudiants </p>
      <h1 className='text-white'>Témoignages des Bakélistes</h1>

      <div className="row pt-5">
        <div className='col-2'>
          <img src={user1} alt="" style={{ width: "80%" }} className='rounded' />
        </div>
        <div className='col-4 pt-3 text-white'>
          <span className="testimonial-text">A Bakeli, j'ai appris à travailler en équipe et à développer mon sens de la responsabilité, de la ponctualité et de l’autonomie.</span>
        </div>
        <div className='col-2'>
          <img src={user2} alt="" style={{ width: "80%" }} className='rounded' />
        </div>
        <div className='col-4 pt-3 text-white'>
          <span className="testimonial-text">A Bakeli, j'ai appris à travailler en équipe et à développer mon sens de la responsabilité, de la ponctualité et de l’autonomie.</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
