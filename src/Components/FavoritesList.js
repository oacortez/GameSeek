import React from 'react'
import '../Styles/FavoritesList.scss';

const FavoritesList = ({ favoriteGames,  removeFavorite}) => {

  const userFavoriteGames = favoriteGames.map(gameInfo => {
    return (
      <div className='favorite-card-container'>
        <div className='favorite-card' key={gameInfo.dealID}>
          <img src={gameInfo.thumb} className='favorite-card-image'/>
          <h2 className='favorite-card-title'>{gameInfo.title}</h2>
          <p className='favorite-card-price'>Sale Price: ${gameInfo.salePrice}</p>
          <p className='favorite-card-rating'>Deal Rating: {gameInfo.dealRating}/10</p>
        </div>
          <button className='remove-favorites-btn' onClick={() => removeFavorite(gameInfo.dealID)}>Remove from favorites</button>
      </div> 
    )
  })
  
  return (
    <div>
      {!userFavoriteGames.length ? <h1 className='no-favorites-msg'>You don't have any favorites</h1> : <h1 className='favorites-list-title'> My favorites List </h1>}
      <div className='wrapper'>
      {userFavoriteGames}
       </div>
    </div>
  )
}
export default FavoritesList
