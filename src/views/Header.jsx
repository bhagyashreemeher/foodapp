import React from 'react'
import "../App.css"

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{background: "linear-gradient(to right, #9c27b0, #e040fb)"}}>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
