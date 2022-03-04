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
      allGamesData: [],
      favoriteLists: [],
    }
  }

  componentDidMount = () => {
    getAllDeals()
    .then(data => this.setState({allGamesData: data}))
  }

  addToFavorites = (id) => {
    const userFavorite = this.state.allGamesData.find(game => game.dealID === id)
    this.setState({favoriteLists: [...this.state.favoriteLists, userFavorite]})
  }

  removeFromFavorites = (id) => {
    const filterFavorites = this.state.favoriteLists.filter(game => game.dealID !== id)
    this.setState({favoriteLists: filterFavorites})
  }
  
  render() {
  return(
    <main className='home-view'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <HomePage allGames={this.state.allGamesData} favorite={this.addToFavorites}/>}/>
        <Route exact path='/favorites' render={() => <FavoritesList favoriteGames={this.state.favoriteLists} removeFavorite={this.removeFromFavorites}/>}/>
      </Switch>
    </main>
    )
  }
}

export default App;
