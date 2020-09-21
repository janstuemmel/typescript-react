import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAuth } from '../slices/authSlice'
import { RootState } from '../store'

export default function LoginPage() {
  
  const dispatch = useDispatch()
  const { error, loading } = useSelector((state: RootState) => state.auth)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function authenticate(): void {
    dispatch(fetchAuth(username, password))
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Username is 'foo'" 
        value={username} 
        onChange={evt => setUsername(evt.target.value)} 
      />
      <br />
      <input 
        type="password" 
        placeholder="Password is 'bar" 
        value={password} 
        onChange={evt => setPassword(evt.target.value)} 
      />
      <br />
      <button onClick={authenticate}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      {error && 
        <div style={{ backgroundColor: 'darkred', color: 'white', padding: 10, margin: 5 }}>{error}</div>
      }
    </div>
  )
}