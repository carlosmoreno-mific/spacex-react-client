import React, { Component } from "react";

export default class Launch extends Component {
  state = {
    missions: [],
  };

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/missions/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ missions: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Historial de Misiones</h1>
            <p className="lead text-muted">
              Recopila detalles sobre grupos de 2 o más lanzamientos de la misma
              compañía, para brindar un contexto adicional sobre los detalles de
              la compañía, los fabricantes y las cargas útiles transportadas.
            </p>
          </div>
        </div>
        <div id="cards" className="py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 rows-cols-lg-2">
              {this.state.missions.map((e) => (
                <div className="col mb-4">
                  <div
                    className="card h-100 border-primary shadow"
                    key={e.mission_id}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{e.mission_name}</h5>
                      <h6 className="card-subtitle small mb-2">
                        Website: <a target="_blank" rel="noopener noreferrer" href={e.website}>{e.website}</a>
                      </h6>
                      <p className="card-text">{e.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
