import React from 'react';
import cb from '../assets/images/cb.jpeg'
import img12 from '../assets/images/12.png'
import { FaCalendar, FaPeopleArrows } from 'react-icons/fa';

const Coach = () => {
  return (
    <div className='container pt-5 mt-5'>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className='fw-bold pt-2'>Pas de Professeur <br /> ici !</h1>
          <p className='mt-4 text-lead'>Le coach permet au Bakeliste de se sentir à l'aise dans l'école en le guidant dans ses tâches grâce à sa <br />bienveillance. </p>
          <p className='mt-4 text-lead'>Ce système de coaching entraîne naturellement un nouveau rapport élève-école.</p>
        </div>
        <div className="col-12 col-md-6">
          <img src={cb} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      <h3 className='text-success'>Bakelistes</h3>
      <div className='row'>
        <h1 className='fw-bold text-start'>News</h1>
        <div className="col-12 col-md-4 mt-5 pt-5">
          <p> <FaCalendar /> &nbsp;21 JUILLET 2023</p>
          <p><FaPeopleArrows /> &nbsp;JESUS CHRIST DIATTA</p>
          <h4 className='text-success'>La peur de prendre la parole en public</h4>
          <p className='mt-3'>La peur de prendre parole en public est l'une des</p>
        </div>
        <div className="col-12 col-md-4">
          <img src={img12} alt="" style={{ width: "80%" }} />
          <p> <FaCalendar /> &nbsp;21 JUILLET 2023</p>
          <p><FaPeopleArrows /> &nbsp;JESUS CHRIST DIATTA</p>
          <h4 className='text-success'>Le pouvoir du savoir</h4>
          <p className='mt-3'>Le savoir, c'est bien plus qu'une simple accumulation de connaissances</p>
        </div>
        <div className="col-12 col-md-4">
          <p> <FaCalendar /> &nbsp;21 JUILLET 2023</p>
          <p><FaPeopleArrows /> &nbsp;JESUS CHRIST DIATTA</p>
          <h4 className='text-success'>L'Intelligence Artificielle, Avantages et Inconvénients</h4>
          <p className='mt-3'>L'intelligence artificielle (IA) est un domaine de l'informatique qui vise</p>
        </div>
      </div>
    </div>
  )
}

export default Coach;
