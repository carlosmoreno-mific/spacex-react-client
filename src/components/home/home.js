import React from 'react';
import { NavLink } from 'react-router-dom'

import './home.scss';

export default () => <section className="container-fluid bg-home">

    <div className="row row-cols-1 row-cols-md-2">
        <div id="left" className="col">
            <div className="jumbotron text-white">
                <h1 className="jumbotron-heading pt-9">Toda la informacion del camino hacia las estrellas.</h1>
                <p className="lead">Visualiza toda la informacion asociadas a los proyectos de Space X en un solo sitio.</p>
                <p><NavLink to="/launches" className="btn btn-lg btn-outline-light">Ver Lanzamientos</NavLink>
                <NavLink to="/missions" className="btn btn-lg btn-link text-white">Misiones</NavLink></p>
            </div>
        </div>
        <div id="right" className="col d-none d-md-block">
            <img id="rocket" className="img-fluid" src={process.env.PUBLIC_URL + '/undraw_To_the_stars_qhyy.svg'} alt="Rockets" />
        </div>
    </div>

</section>;