import React from 'react';
import img2 from '../assets/images/img2.jpg'
import stage from '../assets/images/stage.png'
import img12 from '../assets/images/12.png';
import img13 from '../assets/images/13.png';
import img14 from '../assets/images/14.png';
import img15 from '../assets/images/15.png';
import { FaGift, FaClock, FaMapMarker } from 'react-icons/fa';

const SecondPart = () => {
  return (
    <div className='container bg-gray py-5 bgc'>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="text-start text-info">Bienvenue à Bakeli School of Technology</h1>
          <p className='pt-3 text-lead'>
            Bakeli School of Technology est une école de formation professionnelle dans les nouveaux métiers du digital créée par Volkeno.
          </p>
          <p className='pt-3 text-lead'>
            Depuis sa création en 2016, elle a formé plus de 5 000 étudiants et professionnels !
          </p>
        </div>
        <div className="col-lg-6">
          <img src={img2} alt="" className='img-fluid' />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6">
          <p className='text-info h3'>100% Pratiques</p>
          <h1 className='fw-bold'>Nos Filières</h1>
          <p className='text-lead pt-2'>
            Participez à la transformation du digital de votre pays en devenant un acteur clé du domaine !
          </p>
        </div>
        <div className="col-lg-6">
          <img src={stage} alt="" style={{ width: "40%" }} className='mx-auto' />
        </div>
      </div>

      <div className="row mt-5">
  <div className="col-6 col-md-3 mb-3">
    <div className="text-center">
      <img src={img12} alt="" style={{ width: "100%" }} />
      <h3 className='text-info'>Programmation</h3>
    </div>
  </div>
  <div className="col-6 col-md-3 mb-3">
    <div className="text-center">
      <img src={img13} alt="" style={{ width: "100%" }} />
      <h3 className='text-warning'>Design</h3>
    </div>
  </div>
  <div className="col-6 col-md-3 mb-3">
    <div className="text-center">
      <img src={img14} alt="" style={{ width: "100%" }} />
      <h3 className='text-danger'>Marketing Digital</h3>
    </div>
  </div>
  <div className="col-6 col-md-3 mb-3">
    <div className="text-center">
      <img src={img15} alt="" style={{ width: "100%" }} />
      <h3 className='text-info'>Entrepreneuriat</h3>
    </div>
  </div>
</div>


      <div className="row mt-5 row2">
        <div className="col-lg-6 ">
          <img src={img2} alt="" className=' img-fluid image2' />
        </div>
        <div className="col-lg-6 bg-white">
          <h1>Événements à venir</h1>
          <p> <FaGift /> &nbsp;Mars 07</p>
          <h3>Rentrée 11 Avril 2023</h3>
          <p><FaClock /> &nbsp;8:00 TO 5:00  &nbsp; <FaMapMarker /> &nbsp;BAKELI SCHOOL OF TECHNOLOGY</p>
          <hr />
          <p> <FaGift /> &nbsp;Mars 07</p>
          <h3>Rentrée 11 Avril 2023</h3>
          <p><FaClock /> &nbsp;8:00 TO 5:00  &nbsp; <FaMapMarker /> &nbsp;BAKELI SCHOOL OF TECHNOLOGY</p>
          <hr />
          <p> <FaGift /> &nbsp;Mars 07</p>
          <h3>Rentrée 11 Avril 2023</h3>
          <p><FaClock /> &nbsp;8:00 TO 5:00  &nbsp; <FaMapMarker /> &nbsp;BAKELI SCHOOL OF TECHNOLOGY</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
