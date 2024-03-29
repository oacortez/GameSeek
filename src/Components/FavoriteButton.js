import '../Styles/Card.scss'

const FavoriteButton = ({favorite, isFavorited, unfavorite, dealId}) => {

  const handleClick = (event) => {
    event.preventDefault();
    if(isFavorited) {
      unfavorite(dealId)
    } else {
      favorite(dealId)
    }
  }

  return (
   <button className={isFavorited ? 'remove-favorites-btn' : 'add-favorites-btn' } onClick={handleClick}>
     {isFavorited ? 'Unfavorite Game' : 'Favorite Game'}
   </button>
  )
}

export default FavoriteButton
