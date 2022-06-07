import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}

export default Navbar

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
