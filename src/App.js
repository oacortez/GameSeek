import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllDeals } from './ApiCalls';
import FavoritesPage from './Components/FavoritesPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import './Styles/App.scss';
import {findGame} from '../src/utils/findGame'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGames: [],
      favoritesTally: 0
    }
  }

  componentDidMount = () => {
    if(!this.state.allGames.length) {
      getAllDeals()
        .then(data => this.setState({...this.state, allGames: [...this.state.allGames, ...data]}))
    }
  }

  favoriteGame = (id) => {
    const selectedGame = findGame(id, this.state.allGames)
    
    if(!selectedGame.isFavorited) {
      selectedGame.isFavorited = true
      this.state.favoritesTally++
      this.setState({favoritesTally: this.state.favoritesTally})
      this.setState({allGames: this.state.allGames})
    }
  }

  unfavoriteGame = (id) => {
    const selectedGame = findGame(id, this.state.allGames)

    if(selectedGame.isFavorited) {
      selectedGame.isFavorited = false
      this.state.favoritesTally--
      this.setState({favoritesTally: this.state.favoritesTally})
      this.setState({allGames: this.state.allGames})
    }
  }
  
  render() {
  return(
    <main className='home-view'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <HomePage allGames={this.state.allGames} favoriteGame={this.favoriteGame} unfavoriteGame={this.unfavoriteGame}/>}/>
        <Route exact path='/favorites' render={() => <FavoritesPage allGames={this.state.allGames} favoriteGame={this.favoriteGame} unfavoriteGame={this.unfavoriteGame} favoritesTally={this.state.favoritesTally}/>}/>
      </Switch>
    </main>
    )
  }
}

export default App;
