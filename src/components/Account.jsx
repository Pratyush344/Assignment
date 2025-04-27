import React from 'react'

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 px-6 border-b border-gray-200 bg-white text-gray-600 font-semibold">
        Account Settings
      </div>
      <div className="bg-white mx-auto border-b border-gray-200">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="relative mr-3">
              <img
                src="/lphoto.jpg"
                alt="Profile"
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-white text-xs">P</span>
              </div>
            </div>
            <div>
              <h2 className="font-medium text-gray-800">Pratyush</h2>
              <h4 className="text-gray-500 text-sm">xyz@gmail.Com</h4>
            </div>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account