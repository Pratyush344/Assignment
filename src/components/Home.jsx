import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col justify-end pb-16">
      <div className="mb-2 text-2xl font-bold text-gray-800">Welcome to PopX</div>
      <div className="text-gray-500 mb-6 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="space-y-3">
        <Link to="/signup" className="block">
          <button className="w-full py-3 bg-purple-600 text-white rounded-md font-medium">
            Create Account
          </button>
        </Link>
        <Link to="/signin" className="block">
          <button className="w-full py-3 bg-purple-200 text-gray-700 rounded-md font-medium">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home