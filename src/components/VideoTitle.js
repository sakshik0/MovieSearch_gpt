import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute bg-gradient-to-r from-black">
      <h1 className='text-white text-4xl font-bold'>{title}</h1>
      <p className='text-white py-6 text-lg w-1/4'>{overview}</p>
      <div className=' '>
        <button className='bg-white text-black p-4  w-15 bg-opacity-50 rounded-lg'>⏯ Play</button>
        <button className='bg-white mx-2 text-black  p-4  w-15 bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle