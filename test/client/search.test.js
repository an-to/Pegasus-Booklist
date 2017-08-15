import React from 'react'
import {Provider, connect} from 'react-redux'

import test from 'ava'
import 'jsdom-global/register'
import {
  shallow,
  mount
} from 'enzyme'
import {createMockStore} from 'redux-test-utils'

import ConnectedSearchComponent from '../../client/components/Search'
import {doSearch} from '../../client/actions/searchResult'
import {UPDATE_SEARCHRESULT} from '../../client/actions/index'

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

test('search component rendered, props matches store state', t => {
  const state = getTestData()
  const wrapper = shallow(<ConnectedSearchComponent store={createMockStore(state)} />)
  t.is(wrapper.length, 1)
  t.is(wrapper.props().books, state.books)   
})

test('doSearch dispatch UPDATE_SEARCHRESULT action', t => {
  const state = getTestData()
  const store = createMockStore(state)
  const wrapper = mount(<Provider store={store}><ConnectedSearchComponent /></Provider> )

  doSearch(state.books, ['Fifty'], store.dispatch)
  
  let actions = store.getActions()
  t.is(actions[0].type, UPDATE_SEARCHRESULT)
  t.is(actions[0].foundBooks[0], state.books[1])
})