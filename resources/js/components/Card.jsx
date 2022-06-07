import React from "react";
import ReactDOM from 'react-dom';

const Card = () => {
    return (

        <div className="flex flex-row bg-blueSet-300 text-white w-3/12 h-1/12  text-6xl font-source ">

            <div class=" bg-orangeF w-1/12 h-full ">
            Card Figma
            </div>
            
            <div class="text-6xl text-blueSet-100">

            </div>

        </div>
    )
}

export default Card

if (document.getElementById('card')) {
    ReactDOM.render(<Card />, document.getElementById('card'));
}
