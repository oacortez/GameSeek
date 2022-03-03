import React from 'react'

const Card = ({id, image, title, salePrice, dealRating, }) => {

  return (
    <div className='card'>
      <div className='card-body'>
        <img src={image} className='card-image'/>
        <h2 className='card-title'>{title}</h2>
        <p className='card-price'>Sale Price: ${salePrice}</p>
        <p className='card-rating'>Deal Rating: {dealRating}/10</p>
      </div>
      
      <button className='add-favorites-btn'>Add to my favorites</button>
    </div>
  )
}

export default Card
