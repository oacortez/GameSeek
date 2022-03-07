import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllDeals } from './ApiCalls';
import FavoritesPage from './Components/FavoritesPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import {findGame} from '../src/utils/findGame'
import Loading from './Components/Loading'
import './Styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGames: [],
      favoritesTally: 0,
      isLoading: false,
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    getAllDeals()
    .then(data => {
      this.setState({isLoading: false})
      if(data) {
        this.setState({...this.state, allGames: [...this.state.allGames, ...data]})
      } else {
        throw new Error('Something went wrong, Please try again.')
      }
    })
      .catch(err => {
        this.setState({errorMessage: err})
      })
    // if(!this.state.allGames.length) {
    // }
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
        <Route exact path='/'>
          {this.state.isLoading && <Loading/>}
          {!this.state.isLoading && <HomePage allGames={this.state.allGames} favoriteGame={this.favoriteGame} unfavoriteGame={this.unfavoriteGame}/>}
          </Route>  
        <Route exact path='/favorites' render={() => <FavoritesPage allGames={this.state.allGames} favoriteGame={this.favoriteGame} unfavoriteGame={this.unfavoriteGame} favoritesTally={this.state.favoritesTally}/>}/>
      </Switch>
    </main>
    )
  }
}

export default App;

 // {errorMessage && <Error/>}
        // {this.state.isLoading === true && <Loading/>}