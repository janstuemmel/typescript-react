jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

import React from 'react'
import { mount } from 'enzyme'
import { useSelector } from 'react-redux'

import App from '../../src/App'
import LoginPage from '../../src/pages/LoginPage'

it('should mount without token', () => {

  // given
  useSelector.mockImplementation(cb => cb({
    auth: {
      token: null,
      error: null,
      loading: false
    }
  }))

  // when
  const wrapper = mount(<App />)

  // then
  expect(wrapper.contains(<LoginPage />)).toBe(true)
})


it('should mount with token', () => {

  // given
  useSelector.mockImplementation(cb => cb({
    auth: {
      token: 't0k3n',
      error: null,
      loading: false
    }
  }))

  // when
  const wrapper = mount(<App />)

  // then
  expect(wrapper.contains(<div>Login successful with token: t0k3n</div>)).toBe(true)
})