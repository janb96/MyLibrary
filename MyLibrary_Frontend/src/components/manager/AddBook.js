import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";

class AddBook extends Component {

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
        axios.post("http://localhost:4000/books", postData).then( response =>
            {
                // ISBN is incorrect

                console.log(response);
                if(response.data === "Date is incorrect") {
                    swal("Error!", "Date is incorrect ;(", "error");
                } else if ("ISBN is incorrect" === response.data) {
                    swal("Error!", "ISBN is incorrect ;(", "error");
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
                        <label>Book Title:</label>
                        <input  onChange={this.handleChange} placeholder="Book Title" type="text" className="form-control" id="bookName"/>
                    </div>
                    <div className="form-group">
                        <label>Book Author:</label>
                        <input  onChange={this.handleChange} placeholder="Book Title" type="text" className="form-control" id="bookAuthor"/>
                    </div>
                    <div className="form-group">
                        <label>Book ISBN:</label>
                        <input  onChange={this.handleChange} placeholder="Book Title" type="text" className="form-control" id="bookISBN"/>
                    </div>
                    <div className="form-group">
                        <label>Book Photo URL:</label>
                        <input type="text" onChange={this.handleChange} placeholder="Movie photo url (200px x 200px)" className="form-control" id="bookURL"/>
                    </div>
                    <div className="form-group">
                        <label>Book release date:</label>
                        <input onChange={this.handleChange} placeholder="yyyy-mm-dd" type="date" className="form-control" id="releaseDate"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-block">Add new movie</button>
                </form>
                <br/>
            </div>

        );
    }
}

export default AddBook;
