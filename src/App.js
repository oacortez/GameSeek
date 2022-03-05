import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllDeals } from './ApiCalls';
import FavoritesPage from './Components/FavoritesPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import './Styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGames: [],
      favoriteGames: [],
    }
  }

  componentDidMount = () => {
    getAllDeals()
    .then(data => this.setState({...this.state, allGames: [...this.state.allGames, ...data]}))
  }

  addToFavoritesGames = (id) => {
    const userFavorite = this.state.allGames.find(game => game.dealId === id)

    if(!userFavorite.isFavorited) {
      userFavorite.isFavorited = true
      this.setState({favoriteGames: [...this.state.favoriteGames, userFavorite]})
    }
  }
  

  // ** NOTE: WHEN I CLICK ON 'ADD TO MY favoriteGames' THE CARD STILL DISPLAYS IN HOMEPAGE 
  // CARD IS ABLE TO DISPLAY ON favoriteGames PAGE AND AS WELL REMOVE FROM PAGE 

  // GOAL: GET THE CARD TO DISSAPER IN HOME PAGE WHEN USER CLICKS 'ADD TO MY favoriteGames'
  // AND IS ABLE TO BE CONSISTENT 

  // OR BE ABLE TO CREATE A TOGGLE FUNCTION TO LET THE USER KNOW THEY ALREADY HAVE THAT CARD
  // ON THEIR LIST.

  removeFromFavoriteGames = (id) => {
    const status = this.state.allGames.find(game => game.dealId === id)
    status.isFavorited = false

    const filterfavoriteGames = this.state.favoriteGames.filter(game => game.dealId !== id)
    this.setState({favoriteGames: filterfavoriteGames})
  }
  
  render() {
  return(
    <main className='home-view'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <HomePage allGames={this.state.allGames} favorite={this.addToFavoritesGames} removeFavorite={this.removeFromFavoriteGames}/>}/>
        <Route exact path='/favorites' render={() => <FavoritesPage allGames={this.state.allGames} favoriteGames={this.state.favoriteGames} favorite={this.addToFavoritesGames} removeFavorite={this.removeFromFavoriteGames}/>}/>
      </Switch>
    </main>
    )
  }
}

export default App;
