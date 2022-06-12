import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const MainCard = (props) => {
  const [products, setProducts] = useState(JSON.parse(props.products));
  const [name, setName] = useState(props.name.replace(/[_]/gi, ' '));
  const [route, setRoute] = useState("products/");
  const [bigImage, setBigImage] = useState(0);

  return (
    <div className='bg-setBlue-100 flex flex-col items-center p-[20px] rounded relative f-full'>
      <div className='flex justify-center w-full mb-5 mt-3'>
        <h1 className='font-bold font-source uppercase text-setGray-100 text-center text-3xl lg:text-5xl'>{name}</h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-around w-full lg:flex-nowrap mt-3 mb-3'>

        <div className='flex flex-col items-center w-full mb-5'>
          <a href={route + products[bigImage].id} className='h-[20rem] w-[20rem] lg:h-[540px] lg:w-[540px] overflow-hidden rounded bg-black first-card'>
            <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+products[bigImage].picture+`)` }} ></div>
          </a>
          <h1 className='hidden lg:block font-bold font-source uppercase text-setGray-100 text-3xl text-center mt-3'>{products[bigImage].name.replace(/[_]/gi, ' ')}</h1>
        </div>

        <div className='w-full flex flex-wrap justify-evenly'>
        {products.map((product, index) => {
            return index != bigImage && index < 5 ? <a key={index} href={route + product.id} className='h-[20rem] w-[20rem] lg:h-[250px] lg:w-[250px] overflow-hidden rounded bg-black other-card relative mb-5 lg:mb-0'>
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