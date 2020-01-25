import React, {Component} from 'react';
import axios from 'axios';
import Header from './../header/Header';

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
                <h1>My Books</h1>
            </div>

        );
    }
}

export default Books;
