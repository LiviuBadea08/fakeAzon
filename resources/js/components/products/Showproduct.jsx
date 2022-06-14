import React from "react";
import ReactDOM from 'react-dom';
import  { Btn2 } from "../Buttons"

const Showproduct = () => {
    return (
    <div className="flex flex-col w-full justify-self-center items-center ">
        
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

