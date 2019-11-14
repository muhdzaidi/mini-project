import React, { Component } from 'react';
import Navbar from '../SharedComponents/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../UserStory/Home'
import Entries from '../UserStory/Entries'
import SingleStory from '../UserStory/SingleStory';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/entries' component={Entries} />
              <Route path="/:userstory_id" component={SingleStory} />
            </Switch>
      
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
