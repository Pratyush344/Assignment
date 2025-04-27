import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Account from './components/Account'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
