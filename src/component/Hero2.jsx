import React from 'react';
import './Hero2.css';
import containerImg from '../images/Container.png';

const Hero2 = () => {
  return (
    <div className="container py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

        <div className="col-lg-7">
          <p>DEVELOPMENT 16 March 2023</p>

          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            How to make a Game look more
          </h2>

          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            attractive with New VI & AI
          </h2>

          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Technology
          </h2>

          <p className="text-secondary mb-4">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products
            or developing tools and resources that enable others, we’re
            committed to making AI accessible to everyone.
          </p>

          <button className="btn btn-light bgblue2 bgblue1 py-2">
            Read more
          </button>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn bggreen text-light px-4 py-2" type="button">
              Register
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-5">
          <h1 className="fw-bold">Our Recent Post</h1>

          <img
            src={containerImg}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero2;