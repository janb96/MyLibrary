import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';

class BookManager extends Component {

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

        let photo1;
        let photo2;

        try{
            photo1 = require("../../photo/add-book.png");
            photo2 = require("../../photo/update.png");
        } catch (e) {
            console.log(e);
        }

        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <h1><strong>Book Manager</strong></h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Add new book</h2>
                            <AddBook/>
                        </div>
                        <div className="col-sm-6">
                            <img src={photo1} className="img-fluid" alt="Add new book"/>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={photo2} className="img-fluid" alt="Update book"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>Update book</h2>
                            <UpdateBook/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BookManager;
