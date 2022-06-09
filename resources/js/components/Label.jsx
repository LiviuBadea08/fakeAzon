import React from "react";
import ReactDOM from 'react-dom';

const Label = () => {
    return (
    <div>


        <a href="">
        <div class="flex flex-row bg-setBlue-100 text-setGray-100 h-14 w-52 rounded-xl overflow-hidden text-3xl font-source shadow-md  ">

            <div class=" bg-setGray-200 hover:bg-setOrange w-2/12 h-full mr-1 ">
                
            </div>


            <div class="flex self-center text-2xl font-bold text-setGray-100 hover:text-setOrange ">
                Label Figma
            </div>

        </div>
        </a>

        


                <a href="">
        <div class="flex flex-col-reverse bg-setBlue-100 text-white h-16 w-52 rounded-xl overflow-hidden text-3xl font-source shadow-md  ">

            <div class=" bg-setGray-200 hover:bg-setOrange w-full h-3 mr-1 ">
                
            </div>


            <div class="flex place-self-center mb-1 text-2xl font-bold text-setGray-100 hover:text-setOrange ">
                Label Figma
            </div>

        </div>
        </a>
    </div>
    )
}

export default Label

if (document.getElementById('label')) {
    ReactDOM.render(<Label />, document.getElementById('label'));
}