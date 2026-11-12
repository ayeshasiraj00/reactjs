import React from 'react'
import './Footer.css'
import logs from '../images/logs.png'


const Footer = () => {
  return (
    <div>
        <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Blog</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Aboout us </a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact us </a></li>
           
        </ul>
       <div className="d-flex gap-2 justify-content-center ">
        <img src={logs}alt=""/>
    </div> 

        <p className="text-center text-body-secondary">Copyright Ideapeel Inc © 2023. All Right Reserved</p>
    </footer>
    </div>
  )
}

export default Footer