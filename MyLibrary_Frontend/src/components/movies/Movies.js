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
        this.sortByNameAsc = this.sortByNameAsc.bind(this);
        this.sortByNameDesc = this.sortByNameDesc.bind(this);
        this.sortByReleaseDateAsc = this.sortByReleaseDateAsc.bind(this);
        this.sortByReleaseDateDesc = this.sortByReleaseDateDesc.bind(this);
    }

    async getMovies(afterLink) {
        const promise = await axios.get('http://localhost:4000/movies/' + afterLink);
        const response = promise.data;
        return response;
    }

    async componentDidMount() {

        this.setState({
            movies: await this.getMovies("")
        });

    }

    async sortByNameAsc() {
        this.setState({
            movies: await this.getMovies("sortByNameAsc")
        });
    }

    async sortByNameDesc() {
        this.setState({
            movies: await this.getMovies("sortByNameDesc")
        });
    }

    async sortByReleaseDateAsc() {
        this.setState({
            movies: await this.getMovies("sortByReleaseDateAsc")
        });
    }

    async sortByReleaseDateDesc() {
        this.setState({
            movies: await this.getMovies("sortByReleaseDateDesc")
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <h1><strong>My Movies</strong></h1>
                    <div className="row">
                        <div className="col-3">
                            <button type="button" onClick={this.sortByNameDesc} className="btn btn-outline-secondary">Sort by movie title <i
                                className="fas fa-arrow-up"></i></button></div>
                        <div className="col-3">
                            <button type="button" onClick={this.sortByNameAsc} className="btn btn-outline-secondary">Sort by movie title <i
                                className="fas fa-arrow-down"></i></button></div>
                        <div className="col-3">
                            <button type="button" onClick={this.sortByReleaseDateDesc} className="btn btn-outline-secondary">Sort by release date <i
                                className="fas fa-arrow-up"></i></button></div>
                        <div className="col-3">
                            <button type="button" onClick={this.sortByReleaseDateAsc} className="btn btn-outline-secondary">Sort by release date <i
                                className="fas fa-arrow-down"></i></button></div>
                    </div>
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
