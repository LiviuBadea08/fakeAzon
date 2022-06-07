import React from "react";
import ReactDOM from 'react-dom';

const Label = () => {
    return (

        <div className="flex flex-row bg-blueSet-300 text-white w-3/12 h-1/12  text-3xl font-source ">

            <div class=" bg-orangeF w-1/12 h-full ">
                
            </div>

            <div class="text-6xl text-blueSet-100">
                Label Figma

            </div>




        </div>
    )
}

export default Label

if (document.getElementById('label')) {
    ReactDOM.render(<Label />, document.getElementById('label'));
}
