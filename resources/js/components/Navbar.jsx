import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <div className="flex flex-row bg-black text-white  text-3xl font-source">
            <div className=''>
                ICONO FACTOZON
            </div>

            <div>
                <p>
                    INICIO
                </p>
                <p>
                    MARCAS
                </p>
            </div>

            <div>
            <i class="fa-solid fa-magnifying-glass"></i> 
            </div>

            <div class=" ">
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
