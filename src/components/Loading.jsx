import React from 'react'

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="loader">
        <div className="loader-inner"></div>
        <p className="text-white font-bold mt-4">Loading...</p>
      </div>
    </div>
  )
}

export default Loading