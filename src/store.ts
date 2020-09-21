import { configureStore, Action, combineReducers } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({ auth: authReducer })
const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, ReturnType<typeof rootReducer>, null, Action<string>>

export default store