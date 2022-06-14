import React from "react";
import ReactDOM from 'react-dom';
import  { Btn2 } from "../Buttons"

const Showproduct = () => {
    return (
    <div>
        
        <Btn2/>
        <br />
        <Btn2/>
    
    </div>


    );
}

export default Showproduct

if (document.getElementById('showproduct')) {
    ReactDOM.render(<Showproduct />, document.getElementById('showproduct'));
}

