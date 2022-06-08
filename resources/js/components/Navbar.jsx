import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./nav/search";

const Navbar = () => {
    return (
        <div className="flex w-full justify-between">

            <div className='flex'>
                <img 
                src={('https://i.postimg.cc/HLXqL6R7/factozon-logo.png')}
                alt="" />
                <p class="text-orangeF ">
                    INICIO
                </p>
                <p>
                    MARCAS
                </p>
            </div>

            <div className='flex'>
                <Search /> 
                <i class="fa-solid fa-user" /> 
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    )
}

export default Navbar

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
