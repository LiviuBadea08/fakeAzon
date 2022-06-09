import React from "react";
import ReactDOM from 'react-dom';
const Footer = () => {
        return (
        <footer className="p-4 bg-setBlue-300  shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-setGray-100 sm:text-center ">© 2022
        <a href="" className="hover:underline">Factozon™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap text-setGray-100 items-center mt-3 text-sm sm:mt-0 ">
        <li>
            <a href="" className=" hover:underline mr-7  ">
            <img className="h-10 mr-5 " src={('https://i.postimg.cc/SXnkNYs2/Facebook.png')} alt=""/>
            </a>
        </li>
        <li>
            <a href="" className=" hover:underline mr-7    ">
            <img className="h-10 mr-5 " src={('https://i.postimg.cc/LqQ5xMqf/Instragram.png')} alt=""/>
            </a>
        </li>
        <li>
            <a href="" className=" hover:underline mr-7    ">
            <img className="h-10 mr-5 " src={('https://i.postimg.cc/t18y1RZr/Twitter.png')} alt=""/>
            </a>
        </li>
        </ul>
        <ul className="flex flex-wrap text-setGray-100 items-center mt-3 text-sm sm:mt-0 ">
        <li>
            <a href="" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="" className="hover:underline">Contact</a>
        </li>
        </ul>
        </footer>
        )
    }
    export default Footer
    if (document.getElementById('footer')) {
        ReactDOM.render(<Footer />, document.getElementById('footer'));
    }
