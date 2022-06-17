import React from "react";

export const Btn0 = (props) => {
    return (
        <button type="submit" className="flex items-center justify-center w-[400px] mt-4 bg-setOrange h-10 max-w-lg rounded-full text-3xl font-source shadow-md  ">
            <p className="text-setGray-100 font-bold uppercase">{props.slot}</p>
        </button>
    );
};
export const Btn1 = (props) => {
    return (
        <a href={props.route} className="flex items-center justify-center w-[400px] mt-4 bg-setOrange h-10 max-w-lg rounded-full text-3xl font-source shadow-md  ">
            <p className="text-setGray-100 font-bold uppercase">{props.slot}</p>
        </a>
    );
};
export const Btn2 = (props) => {
    return (
        <div className="flex items-center justify-center w-[637px] bg-setOrange h-11 max-w-lg rounded-full text-3xl font-source shadow-md  ">
            <p className="text-setGray-100 font-bold uppercase">{props.slot}</p>
        </div>
    );
};
export const Btn3 = (props) => {
    return (
        <div className="my-2 flex flex-row bg-setBlue-100 text-setGray-100 h-11 w-[400px] rounded-xl text-3xl font-source shadow-md  ">
            <div className="bg-setOrange flex-none w-11 rounded-l-xl mr-5"></div>

            <div className="flex self-center w-full flex-initial ">
                <p className="text-2xl font-bold text-setGray-100 capitalize">{props.slot}</p>
            </div>
        </div>
    );
};
export const Btn4 = (props) => {
    return (
        <button type="submit" className="w-full bg-setOrange rounded-full h-14 mt-3">
            <p className="text-setGray-100 font-bold uppercase text-3xl font-source">{props.slot}</p>
        </button>
    );
};
export const Btn5 = (props) => {
    return (
        <a className="" href={props.route}>
            <div className="flex flex-row bg-setBlue-100 hover:text-setOrange text-setGray-100 h-14 w-7/12 rounded-xl overflow-hidden text-2xl font-source shadow-md self-center items-center font-bold ">
                <div className="bg-setOrange w-1/12 h-52 mr-6 "></div>
                    {props.slot}
            </div>
        </a>
    );
};
export const Btn6 = (props) => {
    return (
        <div className="bg-setGray-200 w-[400px] my-2 rounded ">
            <p className="text-1xl font-bold text-setGray-100 p-3">{props.slot}</p>
        </div>
    );
};
export const Btn7 = (props) => {
    return (
        <div className="flex items-center justify-center w-[400px] mt-4 bg-setOrange h-10 max-w-lg rounded-full text-3xl font-source shadow-md  ">
            <p className="text-setGray-100 font-bold uppercase">{props.slot}</p>
        </div>
    );
};
export const CreditCard = () => {
    return (
    <div className="my-3 ">
        <div className="text-gray-100 shadow-lg shadow-gray-300 w-full md:w-96 h-52 bg-gradient-to-br from-gray-800 to-gray-400 p-4 rounded relative max-w-[24rem]">
        <p className="font-bold">Aditya Singh</p>
        <p className="my-1 text-sm">
            Frontend, Backend & <br />
            Devops Engineer.
        </p>
        <p className="text-sm">xxxxxxxx@xxxxx.com</p>
        <span className="text-lg font-extrabold absolute right-4 bottom-4">BRAND</span>
        </div>
    </div>
    );
};
export const MinCardShop = (props) => {
    return (
        <div className="first-card p-4 w-full md:w-96 h-52 rounded  flex flex-col justify-center items-center mt-4 max-w-[24rem]" style={{ backgroundImage: `url(`+props.banner+`)` }}>
            {props.logo ? <img src={props.logo} className="w-20 h-20 object-cover rounded-full mb-2 bg-setGray-100" /> : <i className="fa-solid fa-shop text-4xl mb-2"></i> }
            <p className="text-gray-100 font-semibold">{props.name}</p>
        </div>
    );
};
