import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    async getMovies() {
        const promise = await axios.get('http://localhost:4000/movies');
        const response = promise.data;
        return response;
    }

    async componentDidMount() {

        this.setState({
            movies: await this.getMovies()
        });

    }

    render() {
        return (
            <div>
                <Header/>
                <h1>My Movies</h1>
            </div>

        );
    }
}

export default Movies;
