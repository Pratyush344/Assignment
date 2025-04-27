import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="text-2xl font-bold text-gray-800 mb-1">
        Signin to your PopX account
      </div>
      <div className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <div>
        <form action="/server.js">
          <div className="mb-4">
            <label htmlFor="EmailAddress" className="text-purple-500 text-sm font-medium block mb-1">
              Email Address
            </label>
            <div>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded p-2 text-gray-700"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="Password" className="text-purple-500 text-sm font-medium block mb-1">
              Password
            </label>
            <div>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded p-2 text-gray-700"
              />
            </div>
          </div>

          <div>
            <Link to='/account'>
              <button
                type="submit"
                className="w-full bg-gray-300 text-gray-500 font-medium py-3 rounded shadow-sm"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn