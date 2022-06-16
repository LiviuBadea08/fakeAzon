import React, {useState} from 'react'
import ReactDOM from "react-dom";
import {Btn0} from '../Buttons'

const CreateShop = (props) => {
  const [name, setName] = useState(props.name.replace(/[_]/gi, ' '));
  const [logo, setLogo] = useState(props.logo);
  const [banner, setBanner] = useState(props.banner);
  return (
    <div className='w-full flex justify-center'>
        <div className='w-full rounded flex flex-col justify-center items-center md:w-[931px] bg-setBlue-200 p-3'>
            <p className='text-setGray-100 font-bold font-source uppercase text-3xl'>{props.title}</p>
            <div class="mb-6 md:w-[637px] w-full">
                <label for='name' className='block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300'>Nombre de la Tienda</label>
                <input type='text' name='name' id='name' onChange={(event) => setName(event.target.value) } value={name} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='nombre'/>
             </div>
            <div className='mb-6 md:w-[637px] w-full'>
                <label for="logo" class="block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300">Logo</label>
                <input type="url" name='logo' id="logo" onChange={(event) => setLogo(event.target.value) } value={logo} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='logo'/>
             </div>
            <div className='mb-2 md:w-[637px] w-full'>
                <label for='banner' className='block mb-2 text-sm font-medium text-setBlue-300 dark:text-gray-300'>Banner</label>
                <input type='url' name='banner' id='logo' onChange={(event) => setBanner(event.target.value) } value={banner} className='shadow-sm bg-gray-50 border border-gray-300 text-setBlue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='banner'/>
             </div>
             <Btn0 slot='Agregar'></Btn0>
        </div>
    </div>
  )
}

export default CreateShop
if (document.getElementById("create-shop")) 
{
  let title =  document.getElementById("create-shop").getAttribute('title')
  let name =  document.getElementById("create-shop").getAttribute('name')
  let logo =  document.getElementById("create-shop").getAttribute('logo')
  let banner =  document.getElementById("create-shop").getAttribute('banner')
  ReactDOM.render(<CreateShop title={title} name={name} logo={logo} banner={banner} />, document.getElementById("create-shop"));
}