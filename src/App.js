import React, { Component } from 'react';
import { getAllDeals } from './ApiCalls'
import AllGamesContainer from '../src/Components/AllGamesContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGamesData: []
    }
  }

render() {
  return(
    <div className='home-view'>
        <h1>GameSeek</h1>
        <AllGamesContainer />
    </div>
    )
  }
}

export default App;
