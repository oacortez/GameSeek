export const getAllDeals = () => {
  return fetch('https://www.cheapshark.com/api/1.0/deals')
    .then(response => response.json())
}
