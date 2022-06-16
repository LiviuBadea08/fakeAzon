import React from 'react'
import ReactDOM from 'react-dom'
import { Btn2 } from  '../Buttons'

const ProductShow = () => {
    return (
    <div className='bg-setBlue-100 font-source flex flex-col items-center p-[20px] rounded relative f-full'>
      <div className='flex flex-col lg:flex-row justify-around w-full lg:flex-nowrap mt-3 mb-3'>
			{/* IMAGE CONTAINER */}
        <div className='flex flex-col items-center w-full mb-5'>
				
					<a href="" className='h-[20rem] w-[20rem] lg:h-[540px] lg:w-[540px] overflow-hidden rounded bg-black first-card'>
						
						<div 
						className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+`)` }} >
						</div>
          </a>
          
            <h1 className='hidden lg:block font-bold font-source uppercase text-setGray-100 text-3xl text-center mt-3'>
							{}
						</h1>
        </div>
      {/* TEXT CONTAINER */}
        <div className='w-full flex flex-wrap justify-evenly'>
          <div className='flex flex-col items-center justify-center w-full mb-5 space-y-10 text-setGray-100 font-black '>
            
            <h1 className='text-center text-3xl lg:text-5xl'>
							Classic Sweater Supreme{}
						</h1>

						<h1 className=' text-2xl lg:text-3xl font-normal text-left  '>
            <p>
							Suéter para caballeros de color negro marca Supreme de tela fina, diseñado por el famoso diseñador de modas francés Christian Dior en 1947, el diseño sigue fabricándose igual hasta el día de hoy sin alteraciones de otros diseñadores.</p>
						</h1>


						<div	className='text-left flex flex-col text-3xl lg:text-4xl '>
							<h1 className='flex'>Precio:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								1.000.00 €</p>
							</h1>	

							<h1 className='flex'>Marca:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								Supreme.</p>
							</h1>		

							<h1 className='flex'>Vendedor:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								Amancio Ortega.</p>
							</h1>		
						</div>
						
						
            
            <Btn2/>
            
            <Btn2/>
            
            
            
          </div>
        </div>
        
      </div>
    </div>
    )
}
	<div className='bg-setBlue-100 font-source flex flex-col items-center p-[20px] rounded relative f-full'>
      <div className='flex flex-col lg:flex-row justify-around w-full lg:flex-nowrap mt-3 mb-3'>
			{/* IMAGE CONTAINER */}
        <div className='flex flex-col items-center w-full mb-5'>
				
					<a href="" className='h-[20rem] w-[20rem] lg:h-[540px] lg:w-[540px] overflow-hidden rounded bg-black first-card'>
						
						<div 
						className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+`)` }} >
						</div>
          </a>
          
            <h1 className='hidden lg:block font-bold font-source uppercase text-setGray-100 text-3xl text-center mt-3'>
							{}
						</h1>
        </div>
      {/* TEXT CONTAINER */}
        <div className='w-full flex flex-wrap justify-evenly'>
          <div className='flex flex-col items-center justify-center w-full mb-5 space-y-10 text-setGray-100 font-black '>
            
            <h1 className='text-center text-3xl lg:text-5xl'>
							Classic Sweater Supreme{}
						</h1>

						<h1 className=' text-2xl lg:text-3xl font-normal text-left  '>
            <p>
							Suéter para caballeros de color negro marca Supreme de tela fina, diseñado por el famoso diseñador de modas francés Christian Dior en 1947, el diseño sigue fabricándose igual hasta el día de hoy sin alteraciones de otros diseñadores.</p>
						</h1>


						<div	className='text-left flex flex-col text-3xl lg:text-4xl '>
							<h1 className='flex'>Precio:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								1.000.00 €</p>
							</h1>	

							<h1 className='flex'>Marca:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								Supreme.</p>
							</h1>		

							<h1 className='flex'>Vendedor:
							<p className='flex text-2xl lg:text-3xl items-center font-normal ml-2'>
								Amancio Ortega.</p>
							</h1>		
						</div>
						
						
            
            <Btn2/>
            
            <Btn2/>
            
            
            
          </div>
        </div>
        
      </div>
    </div>
export default ProductShow

if (document.getElementById('product-show')) {
    ReactDOM.render(<ProductShow />, document.getElementById('product-show'));
}
