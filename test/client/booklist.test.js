import React from 'react'

import test from 'ava'
import {
  shallow,
  mount
} from 'enzyme'
import 'jsdom-global/register'
import {Books} from '../../client/components/BookList'

test('books rendered', t => {
  const props = {
    books: [{
        id: 2,
        title: "Every Day is for the Thief",
        author_id: 2,
        genre_id: 2,
        first_name: "Teju",
        last_name: "Cole",
        genre: "Novel"
      },
      {
        id: 3,
        title: "Fifty Shades of Grey",
        author_id: 3,
        genre_id: 3,
        first_name: "E L",
        last_name: "James",
        genre: "Provocative Romance"
      }
    ]
  }

  const wrapper = shallow(Books(props))
  t.is(wrapper.find('Book').length, 2)
})