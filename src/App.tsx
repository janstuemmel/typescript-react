import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from './store'
import LoginPage from './pages/LoginPage'

export default function App() {

  const { token } = useSelector((state: RootState) => state.auth)

  if (!token) {
    return <LoginPage />
  }

  return (
    <div>
      Login successful with token: {token}
    </div>
  )
}