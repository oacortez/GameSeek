import React from 'react'
import Card from './Card'
import '../Styles/FavoritesPage.scss';

const FavoritesPage = ({ allGames, unfavoriteGame, favoriteGame}) => {

  const favoriteCards = allGames.map((game) => {
    if(game.isFavorited) {
      return (
          <Card 
            key={`f-${game.dealId}`}
            game={game}
            favorite={favoriteGame}
            unfavorite={unfavoriteGame}
          />
      )
    }
  })
  
  return (
    <div>
      <h1 className='favorites-list-title'> My favorites List </h1>
      <div className='wrapper'>
      {favoriteCards}
       </div>
    </div>
  )
}
export default FavoritesPage