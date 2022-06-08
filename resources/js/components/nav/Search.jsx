import React from 'react'

const Search = () => {
  return (
    <div className='relative flex justify-start items-center'>
        <i class="fa-solid fa-magnifying-glass absolute cursor-pointer mr-2 opacity-60 hover:opacity-80 ml-2"></i>
        <input className='px-[30px] py-2 placeholder-gray-400 text-gray-700 bg-white rounded-full text-sm focus:outline-none focus:shadow-outline w-1/4 text-xs font-bold border' />
    </div>
  )
}

export default Search