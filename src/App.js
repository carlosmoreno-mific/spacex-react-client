import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Navbar from "./components/layout/navbar"
import Home from "./components/home/home"
import Launch from "./components/launch/launch"
import Mission from "./components/mission/mission"

class App extends Component {

  render() {
    return <div>
      <BrowserRouter>
        <header>
          <Navbar></Navbar>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={Launch} />
          <Route path="/missions" component={Mission} />
        </Switch>
      </BrowserRouter>

    </div>
  };
}

export default App;
