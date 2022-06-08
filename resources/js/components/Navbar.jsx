import React from "react";
import ReactDOM from "react-dom";
import Search from "./nav/search";

const Navbar = () => {
    return (
        <nav className="bg-setBlue-300">
            <div className="container">
                <div className="flex w-full justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex items-center">
                        <div className="w-1/4 mx-2">
                            <img src={('https://i.postimg.cc/HLXqL6R7/factozon-logo.png')} alt="" />
                        </div>
                        <ul className="flex capitalize font-bold font-source">
                            <li className=" px-4 border-b-4 border-setBlue-300 hover:border-setOrange">
                                <p className="text-setGray-100 text-2xl pb-[1.25rem] pt-4" >inicio</p>
                            </li>
                            <li className=" px-4 border-b-4 border-setBlue-300 hover:border-setOrange">
                                <p className="text-setGray-100 text-2xl pb-[1.25rem] pt-4" >marcas</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <div id="search" className="w-full lg:w-64" />
                        <div className="px-4 border-b-4 border-setBlue-300 hover:border-setOrange">
                            <i className="fa-solid fa-user text-setGray-200 text-3xl pb-[0.95rem] pt-4" />
                        </div>
                        <div className="px-4 border-b-4 border-setBlue-300 hover:border-setOrange">
                            <i className="fa-solid fa-bag-shopping text-setGray-200 text-3xl pb-[0.95rem] pt-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}
