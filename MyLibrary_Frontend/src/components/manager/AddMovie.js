import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";

class AddMovie extends Component {

    constructor() {
        super();
        this.state = {
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
    }

    componentDidMount() {

    }

    handleChange(event){
        let stateName = event.target.id;
        this.setState({
            [stateName]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let postData = this.state;
        axios.post("http://localhost:4000/movies", postData).then( response =>
            {
                console.log(response);
                if(response.data === "Date is incorrect") {
                    swal("Error!", "Date is incorrect ;(", "error");
                } else {
                    swal("Success!", "New movie was added to database ;)", "success").then( () =>
                        window.location.reload()
                    )
                }

            }
        );
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Movie Title:</label>
                        <input  onChange={this.handleChange} placeholder="Movie Title" type="text" className="form-control" id="movieName"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Photo URL:</label>
                        <input type="text" onChange={this.handleChange} placeholder="Movie photo url (200px x 200px)" className="form-control" id="movieURL"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Description:</label>
                        <textarea rows="5" onChange={this.handleChange} placeholder="Movie Description" type="text" className="form-control" id="description"/>
                    </div>
                    <label>Duration:</label>
                    <div className="input-group mb-3">
                        <input type="number" onChange={this.handleChange} placeholder="Hours" className="form-control" id="durationHours"/>
                        <input type="number" onChange={this.handleChange} placeholder="Minutes" className="form-control" id="durationMinutes"/>
                        <input type="number" onChange={this.handleChange} placeholder="Seconds" className="form-control" id="durationSeconds"/>
                    </div>
                    <div className="form-group">
                        <label>Movie release date:</label>
                        <input onChange={this.handleChange} placeholder="yyyy-mm-dd" type="date" className="form-control" id="releaseDate"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-block">Add new movie</button>
                </form>
                <br/>
            </div>

        );
    }
}

export default AddMovie;
