import test from 'ava'
import request from 'supertest'
import createServer from '../../server/server'
import setup from './setup-server'


setup(test, createServer)

test('post /api/books add a new book', t => {
  t.pass()
})