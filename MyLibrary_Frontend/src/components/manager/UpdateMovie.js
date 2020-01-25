import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";

class UpdateMovie extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            movieID: "",
            movieName:"",
            movieURL: "",
            description: "",
            durationHours: "",
            durationMinutes: "",
            durationSeconds: "",
            releaseDate: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadMovieData = this.loadMovieData.bind(this);
        this.handleChangeMovieID = this.handleChangeMovieID.bind(this);
    }

    async getMovies() {
        const promise = await axios.get('http://localhost:4000/movies');
        const response = promise.data;
        return response;
    }

    async loadMovieData(movieID) {
        const promise = await axios.get('http://localhost:4000/movies/byMovieID/' + movieID);
        const response = promise.data;

        if (this.state.movies.length > 0) {
            response.map( element => {
                    let p = element;
                    for (let key in p) {
                        if(key !== "movieID") {
                            this.setState({
                                [key]: p[key]
                            });
                        }
                    }
                    return "finish";
                }
            );
        }
    }

    async componentDidMount() {

        this.setState({
            movies: await this.getMovies()
        });

    }

    handleChange(event){
        let stateName = event.target.id;
        this.setState({
            [stateName]: event.target.value
        });
    }

    handleChangeMovieID(event){
        let movieID = event.target.value;
        this.setState({
            movieID: movieID
        });
        this.loadMovieData(movieID);
    }

    handleSubmit(event){
        event.preventDefault();
        let postData = this.state;
        axios.put("http://localhost:4000/movies", postData).then( response =>
            {
                if(response.data === "Date is incorrect") {
                    swal("Error!", "Date is incorrect ;(", "error");
                } else {
                    swal("Success!", "Movie was updated ;)", "success").then( () =>
                        window.location.reload()
                    )
                }

            }
        );
    }


    render() {

        let option;

        if(this.state.movieID === "") {
            option = <option>Select movie to update</option>;
        }
        return (
            <div>
                <div className="form-group">
                    <select onChange={this.handleChangeMovieID} className="form-control" id="movieID">
                        {option}
                        {this.state.movies.map( (movie, key) =>
                            <option key={key} id="movieID" value={movie.movieID}>
                                {movie.movieName}
                            </option>

                        )}
                    </select>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Movie Title:</label>
                        <input value={this.state.movieName} onChange={this.handleChange} placeholder="Movie Title" type="text" className="form-control" id="movieName"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Photo URL:</label>
                        <input value={this.state.movieURL} type="text" onChange={this.handleChange} placeholder="Movie photo url (200px x 200px)" className="form-control" id="movieURL"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Description:</label>
                        <textarea value={this.state.description} rows="5" onChange={this.handleChange} placeholder="Movie Description" type="text" className="form-control" id="description"/>
                    </div>
                    <label>Duration:</label>
                    <div className="input-group mb-3">
                        <input value={this.state.durationHours} type="number" onChange={this.handleChange} placeholder="Hours" className="form-control" id="durationHours"/>
                        <input value={this.state.durationMinutes} type="number" onChange={this.handleChange} placeholder="Minutes" className="form-control" id="durationMinutes"/>
                        <input value={this.state.durationSeconds} type="number" onChange={this.handleChange} placeholder="Seconds" className="form-control" id="durationSeconds"/>
                    </div>
                    <div className="form-group">
                        <label>Movie release date:</label>
                        <input value={this.state.releaseDate} onChange={this.handleChange} placeholder="yyyy-mm-dd" type="date" className="form-control" id="releaseDate"/>
                    </div>
                    <button type="submit" className="btn btn-outline-warning btn-block">Update movie</button>
                </form>
                <br/>
            </div>

        );
    }
}

export default UpdateMovie;
