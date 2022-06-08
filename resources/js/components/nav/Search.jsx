import React from "react";
import ReactDOM from 'react-dom';

const Search = () => {
    return (
      <div className='relative flex justify-start items-center w-full'>
        <button className="fa-solid fa-magnifying-glass pl-[10px] absolute cursor-pointer opacity-60 hover:opacity-80"></button>
        <input type='text' className='py-[8px] pl-[30px] rounded-full focus:outline-none focus:shadow-outline w-full'/>
      </div>
    )
}

export default Search

if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}