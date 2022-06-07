import React from "react";
import ReactDOM from 'react-dom';

const Footer = () => {
    return (

        <div className="flex flex-row bg-blueSet-300 text-white w-72 h-72  text-3xl font-source ">

            <div class=" bg-orangeF w-full h-full ">
                
            </div>

            <div class="text-6xl text-blueSet-100 ">
                Footer

            </div>




        </div>
    )
}

export default Footer

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
