const getBooks = (db) => {
  return db('books')
    .join('authors', 'authors.id', '=', 'books.author_id')
    .join('genres', 'genres.id', '=', 'books.genre_id')
    .select('*')
}

const addBook = (db, book) => {
  return db('books')
    .insert(book)
}

const getBook = (db, id) => {
  return db('books').where('id', id)
}

const deleteBook = (db, id) => {
  return getBook(db, id).del()
}

module.exports = {
  getBooks,
  addBook,
  getBook,
  deleteBook,
}