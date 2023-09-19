import React from 'react'
import img16 from '../assets/images/16.png';
import img17 from '../assets/images/17.png';
import img18 from '../assets/images/18.png';
import img19 from '../assets/images/19.png';

const Partenaires = () => {
  return (
    <div className='container  part'>
        <div className="row">
            <h3 className='text-success pt-5'>ILS FONT CONFIANCE A NOS ETUDIANTS</h3>
            <h1 className='mt3 fw-bold'> NOS PARTENAIRES </h1>
            <div className="col-3">
                <img src={img16} alt="" style={{width:"65%"}} />
            </div>
            <div className="col-3">
                <img src={img17} alt="" style={{width:"65%"}} />
            </div>
            <div className="col-3">
                <img src={img18} alt="" style={{width:"65%"}}/>
            </div>
            <div className="col-3">
                <img src={img19} alt="" style={{width:"65%"}}/>
            </div>
        </div>
        <p className='pt-5'>Vous recherchez des <span className='text-dark fw-bolder'>stagiaires</span> ou des <span className='text-dark fw-bolder'>alternants </span>fiables pouvant vous accompagner dans votre transformation digitale ?</p>
    </div>
  )
}

export default Partenaires