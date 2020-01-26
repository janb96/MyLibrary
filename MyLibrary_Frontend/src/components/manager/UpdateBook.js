import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert";

class UpdateBook extends Component {

    constructor() {
        super();
        this.state = {
            books: [],
            bookID: "",
            bookName: "",
            bookAuthor: "",
            bookISBN: "",
            bookURL: "",
            releaseDate: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadBookData = this.loadBookData.bind(this);
        this.handleChangeMovieID = this.handleChangeMovieID.bind(this);
    }

    async getBooks() {
        const promise = await axios.get('http://localhost:4000/books');
        const response = promise.data;
        return response;
    }
    async loadBookData(bookID) {
        const promise = await axios.get('http://localhost:4000/books/byBookID/' + bookID);
        const response = promise.data;

        if (this.state.books.length > 0) {
            response.map( element => {
                    let p = element;
                    for (let key in p) {
                        if(key !== "bookID") {
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
            books: await this.getBooks()
        });

    }

    handleChange(event){
        let stateName = event.target.id;
        this.setState({
            [stateName]: event.target.value
        });
    }

    handleChangeMovieID(event){
        let bookID = event.target.value;
        this.setState({
            bookID: bookID
        });
        this.loadBookData(bookID);
    }

    handleSubmit(event){
        event.preventDefault();
        let postData = this.state;
        axios.put("http://localhost:4000/books", postData).then( response =>
            {
                if(response.data === "Date is incorrect") {
                    swal("Error!", "Date is incorrect ;(", "error");
                } else if(response.data === "ISBN is incorrect"){
                    swal("Error!", "ISBN is incorrect ;(", "error");
                } else {
                    swal("Success!", "Book was updated ;)", "success").then( () =>
                        window.location.reload()
                    )
                }

            }
        );
    }


    render() {

        let option;

        if(this.state.bookID === "") {
            option = <option>Select book to update</option>;
        }

        return (
            <div>
                <div className="form-group">
                    <select onChange={this.handleChangeMovieID} className="form-control" id="bookID">
                        {option}
                        {this.state.books.map( (book, key) =>
                            <option key={key} id="movieID" value={book.bookID}>
                                {book.bookName}
                            </option>

                        )}
                    </select>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Book Title:</label>
                        <input value={this.state.bookName} onChange={this.handleChange} placeholder="Movie Title" type="text" className="form-control" id="bookName"/>
                    </div>
                    <div className="form-group">
                        <label>Book Author:</label>
                        <input value={this.state.bookAuthor} onChange={this.handleChange} placeholder="Book Author" type="text" className="form-control" id="bookAuthor"/>
                    </div>
                    <div className="form-group">
                        <label>Book Photo URL:</label>
                        <input value={this.state.bookURL} type="text" onChange={this.handleChange} placeholder="Book photo url (Best is 200px x 200px)" className="form-control" id="bookURL"/>
                    </div>
                    <div className="form-group">
                        <label>Book ISBN:</label>
                        <input value={this.state.bookISBN} type="text" onChange={this.handleChange} placeholder="Book ISBN" className="form-control" id="bookISBN"/>
                    </div>
                    <div className="form-group">
                        <label>Book release date:</label>
                        <input value={this.state.releaseDate} onChange={this.handleChange} placeholder="yyyy-mm-dd" type="date" className="form-control" id="releaseDate"/>
                    </div>
                    <button type="submit" className="btn btn-outline-warning btn-block">Update movie</button>
                </form>
                <br/>
            </div>

        );
    }
}

export default UpdateBook;
