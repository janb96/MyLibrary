import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';
import AddMovie from './AddMovie';

class MovieManager extends Component {

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
                <div className="container-fluid">
                    <h1><strong>Movie Manager</strong></h1>
                    <br/>
                    <div className="row">
                        <div className="col-6">
                            <h2>Add new movie</h2>
                            <AddMovie/>
                        </div>
                        <div className="col-6">
                            <h2>Update movie</h2>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieManager;
