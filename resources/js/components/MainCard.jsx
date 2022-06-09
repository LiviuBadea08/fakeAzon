import React from 'react'
import ReactDOM from 'react-dom';
import { useState } from 'react';

const MainCard = (props) => {
  const [products, setProducts] = useState(JSON.parse(props.products));
  const [name, setName] = useState(props.name.replace(/[_]/gi, ' '));
  console.log(products);

  return (
    <div className='bg-setBlue-100'>
      <div className='flex flex-col'>
        <div className='text-center text-setGray-100 font-bold font-source text-3xl uppercase'>{name}</div>

        <div className='flex'>
          <div>
            <div className='w-[573px] h-[540px]'>
              <img className="w-full" src={products[0].picture} />
            </div>
            <h1>{products[0].name.replace(/[_]/gi, ' ')}</h1>
          </div>
          <div></div>
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