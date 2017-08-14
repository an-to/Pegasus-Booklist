import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'

export function Books({books}) {
  return (
    <div className='booklist'>
      {books.map((book, k) => {
        return (<Book key={k} book={book} />)
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Books)
