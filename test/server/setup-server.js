import knex from 'knex'
import config from '../../knexfile'

export default (test, createServer) => {
  test.beforeEach(t => {
    console.log('beforeeach')
  })

  test.afterEach(t => {
    console.log('aftereach')
  })
}