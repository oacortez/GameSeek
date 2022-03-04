import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false
    }
  }

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <img src={this.props.image} className='card-image'/>
          <h2 className='card-title'>{this.props.title}</h2>
          <p className='card-price'>Sale Price: ${this.props.salePrice}</p>
          <p className='card-rating'>Deal Rating: {this.props.dealRating}/10</p>
        </div>
        
        <button className='add-favorites-btn' onClick={() => this.props.favorite(this.props.id)}>Add to my favorites</button>
      </div>
    )
  }
}

export default Card

// {id, image, title, salePrice, dealRating, favorite}