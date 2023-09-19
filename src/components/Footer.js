import React from 'react';
import { FaChevronCircleRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid bgs'>
        <div className="row pt-5">
          <div className="col-12 col-md-4 text-white">
            <h4>BAKELI SCHOOL OF TECHNOLOGY</h4>
            <p className='pt-3'>Bakeli est une école de formation professionnelle dans les nouvelles technologies créée par Volkeno. Elle a formé plus de 5000 étudiants et professionnels aux métiers des nouvelles technologies et du digital.</p>
            <span className='me-2'><FaFacebook /></span>
            <span className='me-2'><FaTwitter /></span>
            <span className='me-2'><FaYoutube /></span>
            <span><FaInstagram /></span>
          </div>
          <div className="col-12 col-md-4 text-white">
            <p> <FaChevronCircleRight /> Qui Sommes Nous ?</p>
            <p><FaChevronCircleRight /> Nos Coachs</p>
            <p><FaChevronCircleRight /> Nos Formations</p>
            <p><FaChevronCircleRight /> Nos Formations</p>

            {/*  */}
            <p className='pt-5'><FaChevronCircleRight /> La peur de prendre parole en public</p>
            <p><FaChevronCircleRight /> Le pouvoir du savoir à BAKELI !</p>
            <p><FaChevronCircleRight /> L'Intelligence Artificielle, Avantages et Inconvénients</p>
          </div>
          <div className="col-12 col-md-4 text-white">
            <h5>ENTREPRISE</h5>
            <p className='pt-3'>Recruter</p>
            <p>Former vos collaborateurs</p>
            {/*  */}
            <h5>NOTRE SIEGE</h5>
            <p className='pt-3'>Hlm Grand Yoff Villa n°241 <br /> Près du terminus des bus Dakar <br /> Dem Dikk qui vont à l'AIBD <br /> Dakar 11500 </p>
            <p className='pt-3'>(+221) 78-546-1551 <br /> Contact@bakeli.tech <br />https://www.Bakeli.tech</p>
          </div>
        </div>
        <div className="row pt-5 bdf">
          <p className='text-center text-white'> &copy; Copyright 2022 BAKELI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
