import React, { Component } from 'react';
import './launch.scss'

export default class Launch extends Component {

    state = {
        launches: []
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v3/launches/?limit=10')
            .then(res => res.json())
            .then((data) => {
                this.setState({ launches: data })
            })
            .catch(console.log)
    }

    render() {
        return <div>
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Historial de Lanzamientos</h1>
                    <p className="lead text-muted">Las órbitas de carga útil de lanzamiento se actualizan cada hora</p>
                </div>
            </div>
            <div id="cards" className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 rows-cols-lg-2">
                        {
                            this.state.launches.map(e => <div className="col mb-4">
                                    <div className="card h-100 border-primary shadow" key="{e.flight_number}">
                                        <img src={e.links.mission_patch_small} className="card-img-top" alt={e.mission_name} />
                                        <div className="card-body text-white bg-primary">
                                            <h5 className="card-title">{e.mission_name}</h5>
                                            <h6 className="card-subtitle small mb-2">Launch date: {e.launch_date_utc}</h6>
                                            <p className="card-text">{e.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}