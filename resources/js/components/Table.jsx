import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Table = (props) => {
    const [shop, setShop] = useState(JSON.parse(props.shop))
    const [products, setProducts] = useState(JSON.parse(props.products))
    
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-400'>
            <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
                <tr>
                    <th className='px-6 py-3'>
                        Producto
                    </th>
                    <th className='px-6 py-3'>
                        Descripción
                    </th>
                    <th className='px-6 py-3'>
                        Precio
                    </th>
                    <th className='px-6 py-3'></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    return <tr key={index} className='border-b bg-gray-800 border-gray-700'>
                        <th className='px-6 py-4 font-medium text-white whitespace-nowrap'>
                            <a href={'/products/'+ product.id}>{product.name.replace(/[_]/gi, ' ')}</a>
                        </th>
                        <th className='px-6 py-4'>
                            <p className=''>{product.description.replace(/[_]/gi, ' ')}</p>
                        </th>
                        <th className='px-6 py-4'>
                            <p className=''>{product.price} €</p>
                        </th>
                        <th className='flex flex-nowrap items-center justify-center px-6 py-3'>
                            <a href={'/products/'+ product.id +'/edit'} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Editar</a>
                            <a href={'/products/'+ product.id +'/destroy'} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Eliminar</a>
                        </th>
                    </tr>
                }
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table
if (document.getElementById("table")) {
    let shop = document.getElementById('table').getAttribute('shop');
    let products = document.getElementById('table').getAttribute('products');
    ReactDOM.render(<Table shop={shop} products={products} />, document.getElementById("table"));
}