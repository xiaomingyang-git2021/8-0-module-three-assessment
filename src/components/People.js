import React from "react";

class People extends React.Component {
    constructor() {
        super();
        this.state = {
            peopleData: [],
            searchedPerson: null
        }
    }

    fetchPeopleData = () => {
        fetch('https://ghibliapi.herokuapp.com/people/')
        .then((response) => response.json())
        .then((data) => this.setState({ peopleData: data }))
        .catch((error) => { throw error })
    }

    componentDidMount() {
        this.fetchPeopleData();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userInput = event.target.searchBar.value.toLowerCase();
        const foundPersonObj = this.state.peopleData.find((person) => person.name.toLowerCase().includes(userInput))

        this.setState({ searchedPerson: foundPersonObj })
        event.target.searchBar.value = ''
    }

    render() {
        return (
            <div className="people">
                <h2>Search for a Person</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='searchBar' required />
                    <button>Submit</button>
                </form>

                {this.state.searchedPerson
                ? <div>
                    <h3>Name: {this.state.searchedPerson.name}</h3>
                    <h3>Age: {this.state.searchedPerson.age}</h3>
                    <h3>Gender: {this.state.searchedPerson.gender}</h3>
                </div>
                : <h3>Not Found</h3>
                }
            </div>
        )
    }
}

export default People;