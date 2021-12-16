import React from "react";

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            moviesData: [],
            currentMovie: null
        }
    }

    fetchGhibliData = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((response) => response.json())
        .then((data) => this.setState({ moviesData: data }) )
        .catch((error) => { throw error })
    }

    componentDidMount() {
        this.fetchGhibliData();
    }
    
    handleDropdownChange = (event) => {
        const currentMovieObj = this.state.moviesData.find((movie) => movie.title === event.target.value)

        this.setState({ currentMovie: currentMovieObj })
    }

    render() {
        const movieDropdown = this.state.moviesData.map((movie) => {
            return <option value={movie.title} key={movie.id}>{movie.title}</option>
        })

        return (
            <div className="movies">
                <h2>Select a Movie</h2>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {movieDropdown}
                </select>

                {this.state.currentMovie && 
                <div>
                    <h3>Title: {this.state.currentMovie.title}</h3>
                    <h4>Release Date: {this.state.currentMovie.release_date}</h4>
                    <h4>Description: {this.state.currentMovie.description}</h4>
            </div>}
            </div>
        )
    }
}

export default Movies;