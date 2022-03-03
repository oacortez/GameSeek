import React from 'react'
import Card from './Card'
import '../Styles/HomePage.scss'


const HomePage = ({ allGames }) => {

  console.log(allGames);

  const allGameCards = allGames.map((game, index) => {
    return (
      <Card 
        id={index + 1}
        key={index + 1}
        image={game.thumb}
        title={game.title}
        salePrice={game.salePrice}
        dealRating={game.dealRating}
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
