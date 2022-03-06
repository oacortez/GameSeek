export const findGame = (id, games) => {
  return games.find(game => game.dealId === id)
}
