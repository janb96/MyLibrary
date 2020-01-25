import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import Books from './components/books/Books';

import './App.css';
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/books' component={Books}/>
                <Route path='/movies' component={Movies}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
