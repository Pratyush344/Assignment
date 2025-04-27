import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div>Signin to your PopX account </div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe.</div>
      <div>
        <form action="/server.js">

          <div>
            <label htmlFor="EmailAddress">Email Address</label>
            <div><input type="email" placeholder='Enter email address' />
            </div>
          </div>


          <div>
            <label htmlFor="Password">Password</label>
            <div><input type="password" placeholder='Enter password' />
            </div>

          </div>
          <div>
           <button type='submit'>
            LogIn 
           </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignIn
