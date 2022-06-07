import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <div>Navbar
            
            <i class="fa-solid fa-house-chimney"></i>
        </div>
    )
}

export default Navbar

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
