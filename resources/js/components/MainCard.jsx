import React from 'react'
import ReactDOM from 'react-dom';
import { useState } from 'react';

const MainCard = (props) => {
  const [products, setProducts] = useState(JSON.parse(props.products));
  const [name, setName] = useState(props.name.replace(/[_]/gi, ' '));
  const [route, setRoute] = useState("products/");

  return (
    <div className='bg-setBlue-100 flex flex-col items-center p-[20px] rounded relative f-full'>

      <div className='flex justify-center w-full mb-4 mt-3'>
        <h1 className='font-bold font-source uppercase text-setGray-100 text-5xl'>{name}</h1>
      </div>

      <div className='flex flex-row justify-around w-full flex-nowrap mt-3 mb-3'>

        <div className='flex flex-col items-center w-full'>
          <a href={route + products[0].id} className='h-[540px] w-[540px] overflow-hidden rounded bg-black first-card'>
            <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+products[0].picture+`)` }} ></div>
          </a>
          <h1 className='font-bold font-source uppercase text-setGray-100 text-3xl mt-3'>{products[0].name.replace(/[_]/gi, ' ')}</h1>
        </div>

        <div className='w-full flex flex-wrap justify-evenly'>
        {products.map((product, index) => {
            return index > 0 ? <a href={route + product.id} className='h-[250px] w-[250px] overflow-hidden rounded bg-black other-card relative'>
              <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+product.picture+`)` }}></div>
              <div>
                <h3 className='font-bold font-source text-setGray-100 text-sm'>{product.name.replace(/[_]/gi, ' ')}</h3>
              </div>
            </a> : ''
          }
        )}
        </div>

      </div>
    </div>
  )
}

export default MainCard

if (document.getElementById("main-card")) {
    let products = document.getElementById('main-card').getAttribute('products');
    let name = document.getElementById('main-card').getAttribute('name');
    ReactDOM.render(<MainCard products={products} name={name} />, document.getElementById("main-card"));
}