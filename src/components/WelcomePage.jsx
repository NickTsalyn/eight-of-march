import React from 'react'
import { Link } from 'react-router-dom'

export const WelcomePage = () => {

  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-red-500 to-pink-300 p-8 rounded">
      <div>
        <Link
        to='/home'
          className="bg-gray-900 py-2 px-4  text-5xl rounded text-neutral-50 font-semibold hover:bg-transparent hover:text-gray-900 transition duration-300"
        >
          Натисніть тут
        </Link>
      </div>
    </main>
  )
}
