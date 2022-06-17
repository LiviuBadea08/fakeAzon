import React, {useState} from 'react'
import ReactDOM from "react-dom"
import {Btn0} from '../Buttons'

const CreateProduct = (props) => {
    const [name, setName] = useState(props.name.replace(/[_]/gi, ' '))
    const [description, setDescription] = useState(props.description.replace(/[_]/gi, ' '))
    const [price, setPrice] = useState(props.price)
    const [picture, setPicture] = useState(props.picture)

  return (
    <div className='w-full flex justify-center'>
        <div className='w-full rounded flex flex-col justify-center items-center md:w-[931px] bg-setBlue-200 p-3'>
            <p className='text-setGray-100 font-bold font-source uppercase text-3xl'>{props.title}</p>
            <div class="mb-6 md:w-[637px] w-full">
                <label for='name' className='block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300'>Nombre del producto</label>
                <input type='text' name='name' id='name' onChange={(event) => setName(event.target.value) } value={name} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Nombre'/>
            </div>
            <div className='mb-6 md:w-[637px] w-full'>
                <label for="description" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Descripción</label>
                <input type="text" name='description' id="description" onChange={(event) => setDescription(event.target.value) } value={description} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Descripción'/>
            </div>
            <div className='mb-2 md:w-[637px] w-full'>
                <label for='price' className='block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300'>Precio</label>
                <input type='number' name='price' id='price' onChange={(event) => setPrice(event.target.value) } value={price} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Precio'/>
            </div>
            <div className='mb-2 md:w-[637px] w-full'>
                <label for='picture' className='block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300'>Imagen del Producto</label>
                <input type='url' name='picture' id='picture' onChange={(event) => setPicture(event.target.value) } value={picture} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Imgen'/>
            </div>
            <Btn0 slot='Agregar'></Btn0>
        </div>
    </div>
  )
}

export default CreateProduct
if (document.getElementById("create-product")) 
{
    let title = document.getElementById("create-product").getAttribute('title')
    let name = document.getElementById("create-product").getAttribute('name')
    let description = document.getElementById("create-product").getAttribute('description')
    let price = document.getElementById("create-product").getAttribute('price')
    let picture = document.getElementById("create-product").getAttribute('picture')
    ReactDOM.render(<CreateProduct title={title} name={name} description={description} price={price} picture={picture} />, document.getElementById("create-product"));
}