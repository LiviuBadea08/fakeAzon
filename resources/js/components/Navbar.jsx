import React from "react";
import ReactDOM from "react-dom";
import Search from "./nav/Search";

const Navbar = () => {
    return (
        <nav className="bg-setBlue-300">
            <div className="container">
                <div className="nav">
                    <div className="flex items-center">
                        <a href="/" className="w-1/4 mx-2">
                            <img src={('https://i.postimg.cc/HLXqL6R7/factozon-logo.png')} alt="" />
                        </a>
                        <ul className="flex capitalize font-bold font-source">
                            <li className="  border-b-4 border-setBlue-300 hover:border-setOrange">
                                <a href="/" className="pb-[1.25rem] pt-4 px-4 flex items-center">
                                    <p className="text-setGray-100 text-2xl" >inicio</p>
                                </a>
                            </li>
                            <li className="  border-b-4 border-setBlue-300 hover:border-setOrange">
                                <a href="/Shops" className="pb-[1.25rem] pt-4 px-4 flex items-center">
                                    <p className="text-setGray-100 text-2xl" >marcas</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <Search className="w-full lg:w-64" />
                        <div className="border-b-4 border-setBlue-300 hover:border-setOrange">
                            <a href="/login" className="px-4 pb-[0.95rem] pt-4 flex items-center">
                                <i className="fa-solid fa-user text-setGray-200 text-3xl" />
                            </a>
                        </div>
                        <div className="border-b-4 border-setBlue-300 hover:border-setOrange">
                            <a href="/" className="px-4 pb-[0.95rem] pt-4 flex items-center">
                                <i className="fa-solid fa-bag-shopping text-setGray-200 text-3xl" />
                            </a>
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