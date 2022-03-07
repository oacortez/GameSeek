export const cleanData = (data) => {
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

export const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, Please try again.')
  } else {
    return response.json()
  }
}