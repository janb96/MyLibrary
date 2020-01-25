import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from './../header/Header';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            books: []
        };
    }

    async getMovies() {
        const promise = await axios.get('http://localhost:4000/movies');
        const response = promise.data;
        return response;
    }

    async getBooks() {
        const promise = await axios.get('http://localhost:4000/books');
        const response = promise.data;
        return response;
    }

    async componentDidMount() {

        this.setState({
            movies: await this.getMovies(),
            books: await this.getBooks()
        });

    }

    render() {

        let photo1;
        let photo2;

        try{
            photo1 = require("../../photo/movies.png");
            photo2 = require("../../photo/books.png");

            console.log(photo1);
            console.log(photo2);

        } catch (e) {
            console.log(e);
        }

        return (
            <div>
                <Header/>
                <br/>
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-6">
                            <Link to="/movies">
                                <div className="hover01 column">
                                    <figure>
                                        <img src={photo1} className="img-fluid" alt="My Movies"/>
                                    </figure>
                                </div>
                                <h2>My Movies</h2>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/books">
                                <div className="hover01 column">
                                    <figure>
                                        <img src={photo2} className="img-fluid" alt="My Books"/>
                                    </figure>
                                </div>
                                <h2>My Books</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
