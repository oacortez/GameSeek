import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Card.scss'
import FavoriteButton from './FavoriteButton';

const Card = ({game, favorite, unfavorite}) =>  {
  
    return (
      <div className='card'>
        <div className='card-body'>
          <img src={game.image} className='card-image'/>
          <h2 className='card-title'>{game.title}</h2>
          <p className='card-price'>Sale Price: ${game.salePrice}</p>
          <p className='card-rating'>Deal Rating: {Math.round(game.dealRating)}/10</p>
        </div>
        <NavLink className='buy-btn' to={{ pathname: `https://www.cheapshark.com/redirect?dealID=${game.dealId}` }} target="_blank">Click to buy game</NavLink>
      <FavoriteButton favorite={favorite} unfavorite={unfavorite} isFavorited={game.isFavorited} dealId={game.dealId}/>
      </div>
    )
  }

export default Card
