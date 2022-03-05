import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false,
    }
    const {game, favorite, unfavorite} = props
    console.log(game);
  }

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

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <img src={this.props.image} className='card-image'/>
          <h2 className='card-title'>{this.props.title}</h2>
          <p className='card-price'>Sale Price: ${this.props.salePrice}</p>
          <p className='card-rating'>Deal Rating: {this.props.dealRating}/10</p>
        </div>
        <button className='add-favorites-btn' onClick={() => fav(this.props.id)}> Add to favorites </button>
      </div>
    )
  }
}

export default Card

// {id, image, title, salePrice, dealRating, favorite}
// () => this.props.favorite(this.props.id)

// {this.isFavorited ? 'remove' : 'add'}