
import React from 'react'
import ReactDOM from 'react-dom'


function Formcreateshop() {
    return (
        <>
<form className="font-source font-bold" >
    <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Nombre de Marca</label>
        <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="brand name" required/>
    </div>

    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Imagen de Marca</label>
        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-setGray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="brand image" required/>
    </div>

    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Imagen de Portada</label>
        <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-setGray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="banner image" required/>
    </div>

    <div class="mb-6">
        <label for="repeat-password" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Categoria de Marca</label>
        <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-setGray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="brand category" required/>
    </div>

    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="terms" class="ml-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
    </div>

        <button type="submit" class="text-setGray-100 bg-setOrange hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-setOrange-600 dark:hover:bg-setOrange-700 dark:focus:ring-blue-800">Register Shop</button>
        
    </form>
        </>
        );
    }

export default Formcreateshop
if (document.getElementById("formcreateshop")) {
    ReactDOM.render(<Formcreateshop />, document.getElementById("formcreateshop"));
}