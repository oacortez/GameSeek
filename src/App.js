import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { getAllDeals } from './ApiCalls'
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import FavoritesList from './Components/FavoritesList'
import './Styles/App.scss';
import { FaIgloo } from 'react-icons/fa';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allGames: [],
      favorites: [],
    }
  }

  componentDidMount = () => {
    getAllDeals()
    .then(data => this.setState({...this.state, allGames: [...this.state.allGames, ...data]}))
  }

  addToFavorites = (id) => {
    const userFavorite = this.state.allGames.find(game => game.dealID === id)

    if(userFavorite.isFavorited) {
      this.setState({...this.state})
    } else {
      userFavorite.isFavorited = true
      this.setState({favorites: [...this.state.favorites, userFavorite]})
    }
  }

  

  // ** NOTE: WHEN I CLICK ON 'ADD TO MY FAVORITES' THE CARD STILL DISPLAYS IN HOMEPAGE 
  // CARD IS ABLE TO DISPLAY ON FAVORITES PAGE AND AS WELL REMOVE FROM PAGE 

  // GOAL: GET THE CARD TO DISSAPER IN HOME PAGE WHEN USER CLICKS 'ADD TO MY FAVORITES'
  // AND IS ABLE TO BE CONSISTENT 

  // OR BE ABLE TO CREATE A TOGGLE FUNCTION TO LET THE USER KNOW THEY ALREADY HAVE THAT CARD
  // ON THEIR LIST.

  removeFromFavorites = (id) => {
    const filterFavorites = this.state.favorites.filter(game => game.dealID !== id)
    this.setState({favorites: filterFavorites})
  }
  
  render() {
  return(
    <main className='home-view'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <HomePage allGames={this.state.allGames} favorite={this.addToFavorites} removeFavorite={this.removeFromFavorites}/>}/>
        <Route exact path='/favorites' render={() => <FavoritesList favoriteGames={this.state.favorites} removeFavorite={this.removeFromFavorites}/>}/>
      </Switch>
    </main>
    )
  }
}

export default App;
