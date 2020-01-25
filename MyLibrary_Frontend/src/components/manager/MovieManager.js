import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';
import AddMovie from './AddMovie';
import UpdateMovie from './UpdateMovie';

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

        let photo1;
        let photo2;

        try{
            photo1 = require("../../photo/movies.png");
            photo2 = require("../../photo/update.png");

            console.log(photo1);
            console.log(photo2);

        } catch (e) {
            console.log(e);
        }

        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <h1><strong>Movie Manager</strong></h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Add new movie</h2>
                            <AddMovie/>
                        </div>
                        <div className="col-sm-6">
                            <img src={photo1} className="img-fluid" alt="Add new movie"/>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={photo2} className="img-fluid" alt="Update movie"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>Update movie</h2>
                            <UpdateMovie/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieManager;
