import React, {Component} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    async componentDidMount() {

    }

    async deleteMovie() {

        let response = await axios.delete("http://localhost:4000/movies/" + this.props.movieID);

        if(parseInt(response.data) > 0) {
            swal("Success!", "Movie was deleted ;)", "success").then( () =>
                window.location.reload()
            );
        } else {
            swal("Error!", "Something went wrong ;(", "error").then( () =>
                window.location.reload()
            );
        }

    }

    render() {
        return (
            <div className="movie">
                <div className="row">
                    <div className="col-10">
                        <h3>Title: {this.props.movieName}</h3>
                    </div>
                    <div className="col-2">
                        <div onClick={this.deleteMovie}><i className="fas fa-trash-alt"></i></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <p><strong>Description:</strong> {this.props.description}</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={this.props.movieURL} alt={this.props.movieName} height="200" width="200" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><i className="fas fa-play"></i> <strong>Duration time:</strong> {this.props.durationHours}h {this.props.durationMinutes}min {this.props.durationSeconds}sec</p>
                        <p><i className="fas fa-check-circle"></i> <strong>Release date:</strong> {this.props.releaseDate}</p>
                        <p><i className="fas fa-plus"></i> <strong>You added this movie:</strong> {this.props.dateOfEntry}</p>
                    </div>
                </div>
                <hr/>
            </div>

        );
    }
}

export default Movie;
