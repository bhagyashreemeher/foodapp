import React from 'react';
import { Header } from './Header';
import { Articles } from './Articles/Index';
import '../App.css'
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Article from './Articles/Article';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from './../constant';

export const Home = (props) => {
    return (
        <div>
            <Header />
            <div style={{ padding: "10px 30px 0 30px" }}>
                <nav className="nav mb-3">
                    {/* <i className="fa fa-plus"></i> */}
                    <a className="nav-link" href="/" style={{ color: "#007bff" }}>
                        <i className="fa fa-lg fa-plus-square" style={{ color: "#007bff" }}></i><span className="article-header">&nbsp; Article</span>
                    </a>
                    {/* <a className="nav-link active" href="/">New Article</a> */}
                    {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                </nav>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Articles} render={props => {
                            return isAuthenticated() ? <Home {...props} /> : <Redirect to="/signin" />;
                        }} />
                        <Route path="/articles/:id" component={Article} render={props => {
                            return isAuthenticated() ? <Home {...props} /> : <Redirect to="/signin" />;
                        }} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}