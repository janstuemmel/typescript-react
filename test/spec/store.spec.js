
import store from '../../src/store'
import { authRequest, authSuccess, authFailed } from '../../src/slices/authSlice'

describe('auth', () => {

  const { dispatch, getState } = store


  it('should change loading state', () => {
  
    // when
    dispatch(authRequest())
  
    // then
    expect(getState()).toHaveProperty('auth.loading', true)
  })
  
  
  it('should change token state', () => {
  
    // when
    dispatch(authRequest())
    dispatch(authSuccess('t0k3n'))
  
    // then
    expect(getState()).toHaveProperty('auth.loading', false)
    expect(getState()).toHaveProperty('auth.token', 't0k3n')
  })
  
  
  it('should change error state', () => {
  
    // when
    dispatch(authRequest())
    dispatch(authFailed('test_error'))
  
    // then
    expect(getState()).toHaveProperty('auth.loading', false)
    expect(getState()).toHaveProperty('auth.error', 'test_error')
  })
})
