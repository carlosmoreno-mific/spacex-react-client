import React, { Component } from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends Component {

    render() {

        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/" >Space X</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/launches" >Lanzamientos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/missions" >Misiones</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    };
}
Navbar = withRouter(Navbar);
export default Navbar;
