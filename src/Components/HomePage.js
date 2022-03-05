import React from 'react'
import Card from './Card'
import '../Styles/HomePage.scss'


const HomePage = ({ allGames, favorite, removeFavorite}) => {

  console.log(allGames);

  const allGameCards = allGames.map((game) => {
    return (
      <Card 
        id={game.dealID}
        key={game.dealID}
        image={game.thumb}
        title={game.title}
        salePrice={game.salePrice}
        dealRating={game.dealRating}
        favorites={favorite}
        removeFavorite={removeFavorite}
      />
    )
  })

  return (
    <div >
      <h2 className='home-view-title'>All Deal games</h2>
    <div className='wrapper'>
      {allGameCards}
    </div>
    </div>
  )
}


export default HomePage
