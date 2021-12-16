import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
      return (
          <nav className="NavBar">
            <Link to='/'>
                <img 
                    className="home-logo" 
                    src="https://i.pinimg.com/originals/fc/8f/c1/fc8fc1e2e6490d44d963b2c119e2de40.jpg" 
                    alt="pastel Ghibli logo"
                />
            </Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
          </nav>
      )
  }
}

export default NavBar;