import React from 'react';
import undraw from '../assets/images/undraw.png'

const Diplomes = () => {
  return (
    <div className='container mt-5 pt-4'>
        <div className="row">
                <h2 className='text-success'>Nos Qualifications</h2>
                <h1 className='fw-bold'>Présentation des diplômes</h1>

                <div className="col-md-6 col-sm-12 pt-5 ">
                  <img src={undraw} alt="" className='img-fluid'/>
                </div>
                <div className="col-md-6 col-sm-12 bg-success  text-white">
                  <h4 className='text-white pt-5'>Diplômes</h4>
                  <h5 className='pt-5 ms-5'>CP : Certification Professionel </h5>
                  <p className='ms-5'>La formation dure 3 mois, 6 mois ou 1 an.</p>
                  {/*  */}
                  <h5 className='pt-5 ms-5'>DAP : Diplôme d'Aptitude Professionnelles</h5>
                  <p className='ms-5'>La formation dure 2 ans avec chaque année 9 mois de cours et 3 mois de stage garanti. Réservé à ceux qui ont le CFEE.</p>
                  {/*  */}
                  <h5 className='pt-5 ms-5'>DEP : Diplôme d'Etudes Professionnelles</h5>
                  <p className='ms-5'>La formation dure 2 ans, réservée à ceux qui ont le BFEM.</p>
                  {/*  */}
                  <h5 className='pt-5 ms-5'>DTS : Diplôme de Technicien Supérieur </h5>
                  <p className='ms-5'>
Diplômes

CP : Certification Professionel
La formation dure 3 mois, 6 mois ou 1 an.

036-hat
DAP : Diplôme d'Aptitude Professionnelles
La formation dure 2 ans avec chaque année 9 mois de cours et 3 mois de stage garanti. Réservé à ceux qui ont le CFEE.

036-hat
DEP : Diplôme d'Etudes Professionnelles
La formation dure 2 ans, réservée à ceux qui ont le BFEM.

036-hat
DTS : Diplôme de Technicien Supérieur
La formation dure 2 ans, réservée à ceux qui ont le BAC.

</p>
                </div>

        </div>
    </div>
  )
}

export default Diplomes