import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className = "container-fluid p-3 bg-dark text-white text-center">
                    <div className="row">
                        <div className="col-12">
                            <Link className="white-link" to="/">
                                <h1>MyLibrary</h1>
                                <p>
                                    Books & Movies manager
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Link className="white-link" to="/movies">
                                <h3>Movies</h3>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="white-link" to="/books">
                                <h3>Books</h3>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="white-link" to="/movies">
                                <h3>Movies Manager</h3>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link className="white-link" to="/movies">
                                <h3>Books Manager</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Header;
