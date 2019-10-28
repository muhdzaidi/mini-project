import React, { Component } from 'react';
import Navbar from '../SharedComponents/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../UserStory/Home'
import Entries from '../UserStory/Entries'

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/entries' component={Entries} />
            </Switch>
      
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
