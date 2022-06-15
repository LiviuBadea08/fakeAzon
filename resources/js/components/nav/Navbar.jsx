import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
    return (
        <nav className="bg-setBlue-300">
            <div className="container">
                <div className="nav">

                    <div className="flex items-center justify-between md:justify-start overflow-hidden">
                        <a href="/" className="w-1/4 mx-2">
                            <img src={"https://i.postimg.cc/HLXqL6R7/factozon-logo.png"} alt=""/>
                        </a>
                        <ul className="flex capitalize font-bold font-source overflow-x-auto">
                            <li className="  border-b-4 border-setBlue-300 hover:border-setOrange">
                                <a href="/" className="pb-[1.25rem] pt-4 px-4 flex items-center">
                                    <p className="text-setGray-100 text-2xl">
                                        inicio
                                    </p>
                                </a>
                            </li>
                            <li className="  border-b-4 border-setBlue-300 hover:border-setOrange">
                                <a href="/shops" className="pb-[1.25rem] pt-4 px-4 flex items-center">
                                    <p className="text-setGray-100 text-2xl">
                                        tiendas
                                    </p>
                                </a>
                            </li>
                            <li className="  border-b-4 border-setBlue-300 hover:border-setOrange">
                                <a href="/products" className="pb-[1.25rem] pt-4 px-4 flex items-center">
                                    <p className="text-setGray-100 text-2xl">
                                        Productos
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between">
                        <div id="search" className="w-full lg:w-72 mr-3"></div>

                        <div className="border-b-4 border-setBlue-300 hover:border-setOrange">
                            <a href="/profile" className="px-4 pb-[0.95rem] pt-4 flex items-center">
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
