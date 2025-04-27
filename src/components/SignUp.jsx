import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="text-2xl font-bold text-gray-800 mb-6">Create your PopX account</div>

      <div>
        <form>
          <div className="mb-4">
            <label htmlFor="Name" className="text-purple-500 text-sm font-medium block mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="text"
                id="Name"
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded p-2 text-gray-700 mb-4"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Phone" className="text-purple-500 text-sm font-medium block mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="number"
                id="Phone"
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded p-2 text-gray-700 mb-4"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-purple-500 text-sm font-medium block mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded p-2 text-gray-700 mb-4"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Password" className="text-purple-500 text-sm font-medium block mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="password"
                id="Password"
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded p-2 text-gray-700 mb-4"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Company" className="text-purple-500 text-sm font-medium block mb-1">
              Company name
            </label>
            <div>
              <input
                type="text"
                id="Company"
                placeholder="Marry Doe"
                className="w-full border border-gray-300 rounded p-2 text-gray-700 mb-4"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Are you an Agency?</label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="agency-yes"
                  name="agency"
                  value="yes"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  defaultChecked
                  required
                />
                <label htmlFor="agency-yes" className="ml-2 text-gray-700">Yes</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="agency-no"
                  name="agency"
                  value="no"
                  className="h-4 w-4 text-gray-400 focus:ring-gray-500"
                />
                <label htmlFor="agency-no" className="ml-2 text-gray-700">No</label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link to='/account'>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-medium py-3 rounded"
              >
                Create Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp