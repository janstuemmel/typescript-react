import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'

interface AuthState {
  token: string | null,
  loading: boolean,
  error: string | null
}

const initialState: AuthState = {
  token: null, 
  loading: false, 
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest(state: AuthState) {
      state.loading = true
    },
    authSuccess(state: AuthState, action: PayloadAction<string>) {
      state.loading = false
      state.token = action.payload
    },
    authFailed(state: AuthState, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  authRequest,
  authSuccess,
  authFailed
} = authSlice.actions

export default authSlice.reducer

export const fetchAuth = (username: string, password: string): AppThunk => async dispatch => {

  // start request
  dispatch(authRequest())

  // fake API call
  setTimeout(() => {

    if(username === 'foo' && password === 'bar') {
      dispatch(authSuccess('t0k3n'))
    } else {
      dispatch(authFailed('wrong credentials'))
    }
  }, 500)
}