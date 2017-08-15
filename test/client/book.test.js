import React from 'react'

import test from 'ava'
import {
  shallow,
  mount
} from 'enzyme'
import 'jsdom-global/register'
import Book from '../../client/components/Book'

test('book renders', t => {
    const book = {
    title: 'title',
    first_name: 'firstname',
    last_name: 'lastname',
    genre: 'genre'
  }

  const wrapper = shallow(<Book book={book} />)
  t.true(wrapper.find('div').first().hasClass('book'))
  t.is(wrapper.find('.title').text(), 'title')
  t.is(wrapper.find('.author').text(), 'by firstname lastname')
})