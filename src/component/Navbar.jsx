
import React from 'react'
import './Navbar.css'
import searchMinus from '../images/search-minus.png'
import zarrin from '../images/zarrin.png'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
              <img src={zarrin} alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">

              <li className="nav-item">
                <a className="nav-link blackColor bgblue1" href="#">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link blackColor" href="#">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link blackColor" href="#">
                  <img src={searchMinus} alt="search" />
                </a>
              </li>

            </ul>

            <div className="d-flex justify-content-center">
              <button className="btn bgblue text-light" type="submit">
                Contact us
              </button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
