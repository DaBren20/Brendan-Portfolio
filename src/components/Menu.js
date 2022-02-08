import React from 'react'
import {
    Link
  } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">About Me</Link>
                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact Me</Link>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
