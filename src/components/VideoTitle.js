import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className='text-white text-5xl font-bold'>{title}</h1>
      <p className='text-white py-6 text-lg w-1/4'>{overview}</p>
      <div className=' '>
        <button className='bg-white text-black p-4  w-15 bg-opacity-50 rounded-lg'>▶ Play</button>
        <button className='bg-white mx-2 text-black  p-4  w-15 bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle