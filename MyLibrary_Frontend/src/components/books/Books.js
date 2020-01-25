import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';
import Book from './Book';

class Books extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    async getBooks() {
        const promise = await axios.get('http://localhost:4000/books');
        const response = promise.data;
        return response;
    }

    async componentDidMount() {

        this.setState({
            books: await this.getBooks()
        });

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <h1><strong>My Books</strong></h1>
                    <br/>
                    {this.state.books != null && this.state.books.map((book, key) =>
                        <Book
                            key={key}
                            bookName={book.bookName}
                            bookID={book.bookID}
                            bookAuthor={book.bookAuthor}
                            bookISBN={book.bookISBN}
                            bookURL={book.bookURL}
                            dateOfEntry={book.dateOfEntry}
                            releaseDate={book.releaseDate}
                        />
                    )}
                </div>
            </div>

        );
    }
}

export default Books;
