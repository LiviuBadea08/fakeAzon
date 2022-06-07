import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <div className="flex flex-row bg-blueSet-300 text-white  text-3xl font-source p-5 px-7">

            <div class="w-32 place-content-center  ">
                <img 
                src={('../../images/factozon_logo.png')}
                alt="" />
            </div>



            <div class="flex flex-row ">
                <p class="text-orangeF ">
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
