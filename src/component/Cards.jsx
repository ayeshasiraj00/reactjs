import React from 'react';
import './Cards.css';
import laaa from '../images/laaa.jpg';
import more from '../images/more.jpg';
import ftbl from '../images/ftbl.jpg';

const Cards = () => {
  return (
    <div> <div className="container py-5">
        <div className="row g-4">

          
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <img src={laaa} className="card-img-top" alt=""/>

                    <div className="card-body">
                        <small className="text-uppercase fw-bold text-primary">
                            Travel
                        </small>

                        <small className="text-secondary ms-2">
                            13 March 2023
                        </small>

                        <h5 className="card-title">
                            8 Rules of Travelling In Sea You <br/> Need To Know
                        </h5>

                        <p className="card-text">
                            Travelling in sea has many advantages. Some of the
                            advantages of transporting goods by sea include:
                            you can ship large volumes at costs.
                        </p>

                        <a href="#" className="fw-bold text-decoration-none">
                            Read More...
                        </a>

                    </div>
                </div>
            </div>

         
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <img src={more} className="card-img-top" alt=""/>

                    <div className="card-body">
                        <small className="text-uppercase fw-bold text-primary">
                            Development
                        </small>

                        <small className="text-secondary ms-2">
                            11 March 2023
                        </small>
                        <h5 className="card-title">
                            How to build strong portfolio and <br/> get a Job in UI/UX
                        </h5>

                        <p className="card-text">
                            Capitalize on low hanging fruit to identify a ballpark
                            value added activity to beta test. Override the digital
                            divide with additional clickthroughs.
                        </p>

                        <a href="#" className="fw-bold text-decoration-none">
                            Read More...
                        </a>

                    </div>
                </div>
            </div>

          
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <img src={ftbl} className="card-img-top" alt=""/>

                    <div className="card-body">
                        <small className="text-uppercase fw-bold text-primary">
                            Sports
                        </small>

                        <small className="text-secondary ms-2">
                            10 March 2023
                        </small>
                        <h5 className="card-title">
                            How to Be a Professional Footballer <br/>
                            in 2023
                        </h5>

                        <p className="card-text">
                            Organically grow the holistic world view of disruptive
                            innovation via workplace diversity and empowerment.
                        </p>

                        <a href="#" className="fw-bold text-decoration-none">
                            Read More...
                        </a>

                    </div>
                </div>
            </div>

        </div>
    </div></div>
  )
}

export default Cards