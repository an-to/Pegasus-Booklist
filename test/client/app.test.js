import test from 'ava'
import React from 'react'
import {shallow, mount} from 'enzyme'

import {App} from '../../client/components/App'

test('app has contains 1 hashrouter', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('HashRouter').length, 1)
})
