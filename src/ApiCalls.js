import {cleanData, checkForError} from './utils/apiHelperFunctions'

export const getAllDeals = () => {
  return fetch('https://www.cheapshark.com/api/1.0/deals')
    .then(response => checkForError(response))
    .then(data => cleanData(data))
}