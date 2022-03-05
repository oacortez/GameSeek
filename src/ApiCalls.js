export const getAllDeals = () => {
  return fetch('https://www.cheapshark.com/api/1.0/deals')
    .then(response => response.json())
    .then(data => cleanData(data))
}

const cleanData = (data) => {
  return data.map(game => {
    const updatedGame = {
      dealId: game.dealID,
      dealRating: game.dealRating,
      id: game.gameID,
      image: game.thumb,
      isFavorited: false,
      salePrice: game.salePrice,
      storeId: game.storeID,
      title: game.title
    }
    return updatedGame;
  })
}