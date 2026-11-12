import React from 'react';
import './Hero.css';
import ai from '../images/ai.jpg';

const Hero = () => {
  return (
    <section className="container-fluid bgblue py-5">
      <div className="container">
        <div className="row align-items-center flex-lg-row-reverse g-5">

        
          <div className="col-lg-6 text-center">
            <img src={ai} className="img-fluid" alt="AI Image" />
          </div>

         
          <div className="col-lg-6 text-white">
            <h5 className="mb-3">Featured Post</h5>

            <h1 className="display-4 fw-bold">
              How AI will <br />
              Change the Future
            </h1>

            <p className="mt-4">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities and becoming more
              personal.
            </p>

            <button className="btn btn-light px-4 py-2">
              Read more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;