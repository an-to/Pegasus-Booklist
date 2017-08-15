import {
  UPDATE_SEARCHRESULT
} from './index'


export const doSearch = (books, keywords, dispatch) => {
  let searchResult = books.filter((book) => {
    let isFound = keywords.map((keyword) => {
        return (book.title.includes(keyword) ||
          book.first_name.includes(keyword) ||
          book.last_name.includes(keyword) ||
          book.genre.includes(keyword))
      })
      .reduce((isFound, searches) => {
        return isFound |= searches
      }, false)

    return isFound && book
  })

  dispatch(updateSearchResult(searchResult))
}

export const updateSearchResult = (foundBooks) => {
  return {
    type: UPDATE_SEARCHRESULT,
    foundBooks
  }
}
