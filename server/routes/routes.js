var express = require('express')
var router = express.Router()

var booksDb = require('../db/books')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  booksDb.getBooks(db)
    .then(books => {
      res.json(books)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
})

router.post('/', (req, res) => {
  const db = req.app.get('db')
  const nb = req.body
  booksDb.addBook(db, req.body)
    .then(() => {
      res.json(nb)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const db = req.app.get('db')
  const bookId = req.params.id
  let deletedBook = null
  booksDb.getBook(db, bookId)
    .then((book) => {
      deletedBook = book
      return booksDb.deleteBook(db, bookId)
    })
    .then((result) => {
      res.json(deletedBook)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
})

// async/await version
// router.delete('/:id', async(req, res) => {
//   const db = req.app.get('db')
//   const bookId = req.params.id
//   try {
//     let deletedBook = null
//     const book = await booksDb.getBook(db, bookId)
//     const numBooksDeleted = await booksDb.deleteBook(db, bookId)
//     res.json(deletedBook)
//   } catch (err) {
//     res.status(500).json(err.message)
//   }
// })


module.exports = router