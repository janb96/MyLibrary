import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';
import Movie from './Movie';
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
                <div className="container-fluid">
                    <h1><strong>My Movies</strong></h1>
                    <br/>
                    {this.state.movies != null && this.state.movies.map((movie, key) =>
                        <Movie
                            key={key}
                            movieID={movie.movieID}
                            movieName={movie.movieName}
                            movieURL={movie.movieURL}
                            description={movie.description}
                            durationHours={movie.durationHours}
                            durationMinutes={movie.durationMinutes}
                            durationSeconds={movie.durationSeconds}
                            dateOfEntry={movie.dateOfEntry}
                            releaseDate={movie.releaseDate}
                        />
                    )}
                </div>
            </div>

        );
    }
}

export default Movies;
