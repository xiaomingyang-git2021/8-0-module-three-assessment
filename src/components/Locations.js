import React from "react";

class Locations extends React.Component {
    constructor() {
        super();
        this.state = {
            locationsData: [],
            show: false
        }
    }

    fetchLocationsData = () => {
        fetch('https://ghibliapi.herokuapp.com/locations')
        .then((response) => response.json())
        .then((data) => this.setState({ locationsData: data }) )
        .catch((error) => { throw error })
    }

    componentDidMount() {
        this.fetchLocationsData();
    }

    handleOnClick = (event) => {
        this.setState({ show: !this.state.show })
    }
    
    showLocations = () => {
        return this.state.locationsData.map((location) => {
            return (
                <ul className="location-card">
                    <li>
                        <h4>Name: {location.name}</h4>
                        <h4>Climate: {location.climate}</h4>
                        <h4>Terrain: {location.terrain}</h4>
                    </li>
                </ul>
            )
        })
    }

    render() {
        const { show } = this.state;
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleOnClick}>Show Locations</button>
                {show && <button onClick={this.handleOnClick}>Hide Locations</button>}
                {show && this.showLocations()}
            </div>
        )
    }
}

export default Locations;