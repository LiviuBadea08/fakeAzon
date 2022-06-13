import React from "react";
import ReactDOM from 'react-dom';
import { Buttons } from "../Buttons.jsx"

const Showproduct = () => {
    return (
    <div>
        {/* <Btn2>dsads</Btn2>dsa */}dssd
        <Buttons/>dsas
    </div>


    );
}

export default Showproduct

if (document.getElementById('showproduct')) {
    ReactDOM.render(<Showproduct />, document.getElementById('showproduct'));
}

