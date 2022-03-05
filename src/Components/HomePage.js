import React from 'react'
import Card from './Card'
import '../Styles/HomePage.scss'


const HomePage = ({ allGames, favorite, removeFavorite}) => {

  const allGameCards = allGames.map((game) => {
    return (
      <Card 
        key={game.dealId}
        game={game}
        favorite={favorite}
        unfavorite={removeFavorite}
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
