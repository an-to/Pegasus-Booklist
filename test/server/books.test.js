import 'babel-polyfill' // required for async/await
import test from 'ava'
import request from 'supertest'
import createServer from '../../server/server'
import setup from './setup-server'
import bookDb from '../../server/db/books'


setup(test, createServer)

function getAllBooksFromDb(db) {
  return bookDb.getBooks(db)
}


test('get /api/books get all books', async t => {
  const res = await request(t.context.app)
    .get('/api/books')

  t.is(res.status, 200)
  const numBooks = res.body.length
  t.is(numBooks, 6)
})

test('post /api/books add a new book', async t => {
  const nb = {
    title: 'test book',
    author_id: 2,
    genre_id: 2
  }

  const res = await request(t.context.app)
    .post('/api/books')
    .send(nb)

  t.is(res.status, 200)
  t.deepEqual(res.body, nb)

  const books = await getAllBooksFromDb(t.context.db)
  t.is(books.length, 7)
})

test('delete /api/books delete a book', async t => {
  const res = await request(t.context.app)
    .delete('/api/books/2')

  t.is(res.status, 200)

})