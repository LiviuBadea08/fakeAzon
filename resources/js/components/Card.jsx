import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Card = (props) => {
    const [shop, setShop] = useState(JSON.parse(props.data));
    const [route, setRoute] = useState("Shops/" + shop.id);
    console.log(route);
    return (
        <div className="flex flex-col  bg-setBlue-100 w-96 h-80  rounded-sm shadow-md">
            <div className="flex max-w-full h-1/5 items-center place-content-center">
                {/* icono */}
                <div className=" bg-setOrange start w-4 h-4 "></div>

                <a className="text-setGray-100  text-4xl font-source font-black" href={route}>
                    {shop.name.replace(/[_]/gi, ' ')}
                </a>
            </div>

            <div className="bg-setGray-100 w-80 h-56 place-self-center text-center p-2  ">
                <a className=" text-2xl font-bold  " href={route}>
                    <img
                        className=" h-full w-full  object-center "
                        src={"https://i.postimg.cc/jLwhqwSB/crocs.png"}
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default Card;

if (document.getElementById("card")) {
    let data = document.getElementById('card').getAttribute('data');
    ReactDOM.render(<Card data={data} />, document.getElementById("card"));
}
