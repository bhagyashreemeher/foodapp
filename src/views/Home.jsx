import React from 'react'
import { Header } from './Header'
import { Articles } from './Articles'

export const Home = (props) => {
    return (
        <div>
            <Header />
            <div style={{ padding: "10px 30px 0 30px" }}>
                <nav className="nav mb-3">
                    {/* <i className="fa fa-plus"></i> */}
                    <a className="nav-link" href="/" style={{ color: "#007bff" }}>
                        <i className="fa fa-lg fa-plus" style={{ color: "#007bff" }}></i> Article
                    </a>
                    {/* <a className="nav-link active" href="/">New Article</a> */}
                    {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                </nav>
                <Articles />
            </div>
        </div>
    )
}
