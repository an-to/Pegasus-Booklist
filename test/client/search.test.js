import React from 'react'
import {connect} from 'react-redux'

import test from 'ava'
import 'jsdom-global/register'
import {
  shallow,
  mount
} from 'enzyme'
import {createMockStore} from 'redux-test-utils'

import ConnectedComponent from '../../client/components/Search'
import {updateSearchResult} from '../../client/actions/searchResult'

function getTestData() {
  return {
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
}

test('search component rendered', t => {
  const state = getTestData()
  const wrapper = shallow(<ConnectedComponent store={createMockStore(state)} />)
  t.is(wrapper.length, 1)
  t.is(wrapper.props().books, state.books)   
})