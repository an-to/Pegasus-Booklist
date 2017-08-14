import 'babel-polyfill' // required for async/await
import test from 'ava'
import request from 'supertest'
import createServer from '../../server/server'
import setup from './setup-server'


setup(test, createServer)

test('get /api/books get all books', async t => {
  const res = await request(t.context.app)
    .get('/api/books')

  t.is(res.status, 200)
  const numBooks = res.body.length
  t.deepEqual(numBooks, 6)
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
})