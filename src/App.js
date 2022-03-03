import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { getAllDeals } from './ApiCalls'
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import FavoritesList from './Components/FavoritesList'
import './Styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGamesData: []
    }
  }

  componentDidMount = () => {
    getAllDeals()
    .then(data => this.setState({allGamesData: data}))
  }
  
  render() {
  return(
    <main className='home-view'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <HomePage allGames={this.state.allGamesData}/>}/>
        <Route exact path='/favorites' render={() => <FavoritesList />}/>
      </Switch>
    </main>
    )
  }
}

export default App;
