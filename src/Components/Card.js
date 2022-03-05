import React from 'react';
import '../Styles/Card.scss'
import FavoriteButton from './FavoriteButton';

const Card = ({game, favorite, unfavorite}) =>  {
// console.log(game);

  // id={game.dealID}
  // key={game.dealID}
  // image={game.thumb}
  // title={game.title}
  // salePrice={game.salePrice}
  // dealRating={game.dealRating}
  // favorites={favorite}
  // removeFavorite={removeFavorite}


  // handleClick = () => {
  //   const favorite = this.state.isFavorited

  //   if(favorite === true) {
  //     this.props.favorites(this.props.id)
  //     this.setState({isFavorited: false})
  //   } else if(favorite == false) {
  //     this.props.removeFavorite(this.props.id)
  //     this.setState({isFavorited: true})
  //   }
    // This method is able to favorite and un favorite but text doesnt toggle when I click on it (its a bug)
  // }

    return (
      <div className='card'>
        <div className='card-body'>
          <img src={game.image} className='card-image'/>
          <h2 className='card-title'>{game.title}</h2>
          <p className='card-price'>Sale Price: ${game.salePrice}</p>
          <p className='card-rating'>Deal Rating: {game.dealRating}/10</p>
        </div>

      <FavoriteButton favorite={favorite} unfavorite={unfavorite} isFavorited={game.isFavorited} dealId={game.dealId}/>
      </div>
    )
  }

export default Card

// {id, image, title, salePrice, dealRating, favorite}
// () => this.props.favorite(this.props.id)

// {this.isFavorited ? 'remove' : 'add'}