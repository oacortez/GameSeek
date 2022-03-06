import React from 'react'
import Card from './Card'
import '../Styles/FavoritesPage.scss';

const FavoritesPage = ({ allGames, unfavoriteGame, favoriteGame, favoritesTally}) => {

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
      { favoritesTally === 0 ? <h2 className='no-favorites-msg'>You dont have any games favorited</h2> : <h1 className='favorites-list-title'> My favorites List </h1>}
      <div className='wrapper'>
      {favoriteCards}
       </div>
    </div>
  )
}
export default FavoritesPage