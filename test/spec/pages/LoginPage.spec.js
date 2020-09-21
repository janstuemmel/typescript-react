jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

import React from 'react'
import { mount } from 'enzyme'
import { useDispatch, useSelector } from 'react-redux'

import LoginPage from '../../../src/pages/LoginPage'


it('should mount with loading state', () => {

  // given
  useSelector.mockImplementationOnce(cb => cb({
    auth: {
      error: null,
      loading: true
    }
  }))

  // when
  const wrapper = mount(<LoginPage />)

  // then
  expect(wrapper.contains('Loading...')).toBe(true)
})


it('should mount with error state', () => {

  // given
  useSelector.mockImplementationOnce(cb => cb({
    auth: {
      error: 'test_error',
      loading: false
    }
  }))

  // when
  const wrapper = mount(<LoginPage />)

  // then
  expect(wrapper.contains('test_error')).toBe(true)
})


it('should call authenticate', () => {

  // given
  const dispatch = jest.fn()
  useDispatch.mockImplementationOnce(() => dispatch)
  useSelector.mockImplementationOnce(cb => cb({
    auth: {
      error: null,
      loading: false
    }
  }))

  const wrapper = mount(<LoginPage />)

  // when
  wrapper.find('button').simulate('click')

  // then
  expect(dispatch).toHaveBeenCalled()
})