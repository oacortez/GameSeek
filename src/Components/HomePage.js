import React from 'react'
import Card from './Card'
import '../Styles/HomePage.scss'


const HomePage = ({ allGames, favoriteGame, unfavoriteGame}) => {

  const unfavoriteGames = allGames.map((game) => {
    if(!game.isFavorited) {
      return (
        <Card 
        key={`h-${game.dealId}`}
          game={game}
          favorite={favoriteGame}
          unfavorite={unfavoriteGame}
        />
      )
    }
  })

  return (
    <div >
      <h2 className='home-view-title'>All Deal Games</h2>
    <div className='wrapper'>
      {unfavoriteGames}
    </div>
    </div>
  )
}


export default HomePage
