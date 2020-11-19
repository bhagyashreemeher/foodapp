import React from 'react'
import "../App.css"
import { useState } from 'react';
import { Profile } from '../constant';

export const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const profile = Profile();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{ background: "linear-gradient(to right, #9c27b0, #e040fb)" }}>
            <a className="navbar-brand" href="/">Foodie</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li> onBlur={()=>setIsOpen(false)}*/}
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle text-white" onMouseOut={() => {setIsOpen(false)}} onClick={(e) => {e.stopPropagation();setIsOpen(!isOpen)}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-lg fa-user-circle"></i>
                        </div>
                        <div className={"dropdown-menu dropdown-menu-right" + (isOpen === true ? ' show' : ' hide')} aria-labelledby="navbarDropdown">
                            <span className="dropdown-item">{profile.email}</span>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div className="btn-group">
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="btn dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                </button>
                <div className={'dropdown-menu dropdown-menu-right' + (isOpen === true ? ' show' : ' hide')}>
                    <span className="dropdown-item">{profile.email}</span>
                </div>
            </div> */}
        </nav>
    )
}
