import React from 'react'

const FavoritesList = ({ favoriteGames,  removeFavorite}) => {

  const userFavoriteGames = favoriteGames.map(gameInfo => {
    return ( 
        <div className='favorite-card' key={gameInfo.dealID}>
          <img src={gameInfo.thumb} className='favorite-card-image'/>
          <h2 className='favorite-card-title'>{gameInfo.title}</h2>
          <p className='favorite-card-price'>Sale Price: ${gameInfo.salePrice}</p>
          <p className='favorite-card-rating'>Deal Rating: {gameInfo.dealRating}/10</p>
          <button onClick={() => removeFavorite(gameInfo.dealID)}>Remove from favorites</button>
        </div>
    )
  })
  
  return (
    <div className='favorite-card-container'>
        {!userFavoriteGames.length ? <h1>You don't have any favorites</h1> : userFavoriteGames}
    </div>
  )
}
export default FavoritesList
