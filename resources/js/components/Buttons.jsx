import React from "react";
import ReactDOM from 'react-dom';

const Buttons = () => {
    return (

<div>

    <a class="" href="/">
    <div class="flex self-center items-center flex-row bg-setBlue-100 text-setGray-100 hover:text-setOrange font-bold  h-14 max-w-sm rounded-[15px] overflow-hidden text-3xl font-source shadow-md  ">

        <div class=" bg-setOrange w-2/12 h-full mr-1 ">
            
        </div>
        
        index.blade '/'
        

    </div>
    </a>
        
<br />
    

    <a class=" " href="landing">
    <div class="flex flex-row items-center font-bold text-setGray-100 bg-setOrange h-14 max-w-lg rounded-[40px] overflow-hidden text-3xl font-source shadow-md  ">
        
        welcome.blade 'landing'
            
                
    </div>
    </a>
            
</div>        
    )
}

export default Buttons

if (document.getElementById('buttons')) {
    ReactDOM.render(<Buttons />, document.getElementById('buttons'));
}