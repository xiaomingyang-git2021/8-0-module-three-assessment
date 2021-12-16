import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import People from "./components/People";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/people' component={People}/>
          <Route path='/locations' component={Locations}/>
        </Switch>
      </div>
    )
  }
}

export default App;