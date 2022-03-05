import React from 'react'
import Card from './Card'
import '../Styles/FavoritesPage.scss';

const FavoritesPage = ({ allGames, favoriteGames, removeFavorite, favorite}) => {

  const favoriteCards = allGames.map((game) => {
    if(game.isFavorited) {
      return (
        <Card 
          key={game.dealId}
          game={game}
          favorite={favorite}
          unfavorite={removeFavorite}
        />
      )
    }
  })
  
  return (
    <div>
      {!favoriteGames.length ? <h1 className='no-favorites-msg'>You don't have any favorites</h1> : <h1 className='favorites-list-title'> My favorites List </h1>}
      <div className='wrapper'>
      {favoriteCards}
       </div>
    </div>
  )
}
export default FavoritesPage
