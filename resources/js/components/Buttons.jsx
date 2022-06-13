import React from "react";
import ReactDOM from 'react-dom';

export const Buttons1 = () => {
    return (

        

            <a class="" href="/">
                <div class="flex self-center items-center flex-row bg-setBlue-100 text-setGray-100 hover:text-setOrange font-bold  h-14 max-w-sm rounded-[15px] overflow-hidden text-3xl font-source shadow-md  ">

                    <div class=" bg-setOrange w-2/12 h-full mr-1 ">

                    </div>

                    index.blade '/'

                </div>
            </a>


            );
        }
export const Buttons2 = () => {
    return (
            

            <a class=" " href="landing">
                <div class="flex flex-row items-center font-bold text-setGray-100 bg-setOrange h-14 max-w-lg rounded-[40px] overflow-hidden text-3xl font-source shadow-md  ">

                    welcome.blade 'landing'


                </div>
            </a>

            );
        }
export const Buttons3 = () => {
    return (


                <a href="" class="hover:text-setOrange">
                    <div class="flex flex-row bg-setBlue-100 text-setGray-100 h-14 w-52 rounded-xl overflow-hidden text-3xl font-source shadow-md  ">

                        <div class=" bg-setGray-100 hover:bg-setOrange w-2/12 h-full mr-1 ">

                        </div>


                        <div class="flex self-center text-2xl font-bold text-setGray-100 hover:text-setOrange ">
                            Label Figma
                        </div>

                    </div>
                </a>

                );
            }
export const Buttons4 = () => {
    return (


                <a href="">
                    <div class="flex flex-col-reverse bg-setBlue-100 text-white h-16 w-52 rounded-xl overflow-hidden text-3xl font-source shadow-md  ">

                        <div class=" bg-setGray-100 hover:bg-setOrange w-full h-3 mr-1 ">

                        </div>


                        <div class="flex place-self-center mb-1 text-2xl font-bold text-setGray-100 hover:text-setOrange ">
                            Label Figma
                        </div>

                    </div>
                </a>
            
            
    );
}


if (document.getElementById('buttons')) {
    ReactDOM.render(<Buttons />, document.getElementById('buttons'));
}