import React from "react";
import ReactDOM from 'react-dom';

const Card = () => {
    return (

            
            
                
            <div class="flex flex-col  bg-setBlue-100 w-96 h-80  rounded-sm shadow-md    ">              
                <div class="flex max-w-full h-1/5 items-center place-content-center   ">
            {/* icono */}
                <div class=" bg-setOrange start w-4 h-4 " >   
                </div>
        
                <a class="text-setGray-100  text-4xl font-source font-black   "
                href="">
        
                shop/item
                </a>
                </div>     
        
        
                <div class="bg-setGray-100 w-80 h-56 place-self-center text-center p-2  ">
                
                <a class=" text-2xl font-bold  " 
                href="">

                <img class=" h-full w-full  object-center "
                src={("https://i.postimg.cc/jLwhqwSB/crocs.png")}
                alt="" />                 
                
                </a>
        
                </div>
            </div>             
            
    )
}

export default Card

if (document.getElementById('card')) {
    ReactDOM.render(<Card />, document.getElementById('card'));
}