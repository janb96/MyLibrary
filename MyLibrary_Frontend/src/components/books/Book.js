import React, {Component} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.deleteBook = this.deleteBook.bind(this);
    }

    async componentDidMount() {

    }

    async deleteBook() {

        let response = await axios.delete("http://localhost:4000/books/" + this.props.bookID);

        if(parseInt(response.data) > 0) {
            swal("Success!", "Book was deleted ;)", "success").then( () =>
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
                    <div className="col-8">
                        <h3>Title: {this.props.bookName}</h3>
                        <p><strong>Author:</strong> {this.props.bookAuthor}</p>
                        <p><strong>ISBN:</strong> {this.props.bookISBN}</p>
                    </div>
                    <div className="col-3">
                        <img src={this.props.bookURL} alt={this.props.bookName} height="200" width="200" />
                    </div>
                    <div className="col-1">
                        <div onClick={this.deleteBook}><i className="fas fa-trash-alt"></i></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><i className="fas fa-check-circle"></i> <strong>Release date:</strong> {this.props.releaseDate}</p>
                        <p><i className="fas fa-plus"></i> <strong>You added this movie:</strong> {this.props.dateOfEntry}</p>
                    </div>
                </div>
                <hr/>
            </div>

        );
    }
}

export default Book;
