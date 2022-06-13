import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Products = (props) => {
    const [products, setProducts] = useState(JSON.parse(props.products))
    const [categories, setCategories] = useState(JSON.parse(props.categories))
    const [route, setRoute] = useState("/products/")
    const [didSelectCategory, setDidSelectCategory] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const showAll = () => {
        setProducts(JSON.parse(props.products));
        setDidSelectCategory(false);
    };

    const showCategory = (id) => {
        setDidSelectCategory(true);
        let array = products.filter(product => product.category_id === id);
        setSelectedProducts(array);
    }

  return (
    <div className='bg-setBlue-100 flex flex-col justify-center'>
        <div className='mt-3 sm:max-w-7xl c'>

            <ul className="flex pr-5 pl-5 overflow-x-auto">
                <li className="border-b-[7px] border-setBlue-100 hover:border-setOrange">
                    <button onClick={showAll} className="pb-[1.25rem] pt-4 px-4 flex items-center">
                        <p className="text-setGray-100 text-2xl uppercase font-bold font-source">
                            todos
                        </p>
                    </button>
                </li>
                {categories.map((category, index) => {
                    return  <li key={index} className="border-b-[7px] border-setBlue-100 hover:border-setOrange">
                        <button onClick={() => showCategory(category.id)} className="pb-[1.25rem] pt-4 px-4 flex items-center">
                            <p className="text-setGray-100 text-2xl uppercase font-bold font-source">
                                {category.name}
                            </p>
                        </button>
                    </li>
                }
                )}
            </ul>
        </div>
        <div className='flex flex-wrap justify-evenly py-5 sm:max-w-7xl'>
            {didSelectCategory ?
            selectedProducts.map((product, index) => {
                return <a key={index} href={route + product.id} className='h-[20rem] w-[20rem] lg:h-[350px] lg:w-[350px] overflow-hidden rounded bg-black other-card relative mb-5 lg:mb-0'>
                <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+product.picture+`)` }}></div>
                    <div>
                        <h3 className='font-bold font-source text-setGray-100 text-xl'>{product.name.replace(/[_]/gi, ' ')}</h3>
                    </div>
                </a>
            }) :
            products.map((product, index) => {
                return <a key={index} href={route + product.id} className='h-[20rem] w-[20rem] lg:h-[350px] lg:w-[350px] overflow-hidden rounded bg-black other-card relative mb-5 lg:mb-0'>
                <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+product.picture+`)` }}></div>
                    <div>
                        <h3 className='font-bold font-source text-setGray-100 text-xl'>{product.name.replace(/[_]/gi, ' ')}</h3>
                    </div>
                </a>
            })
            }
        </div>
    </div>
  )
}

export default Products;
if (document.getElementById("products")) {
    let products = document.getElementById('products').getAttribute('products');
    let categories = document.getElementById('products').getAttribute('categories');
    ReactDOM.render(<Products products={products} categories={categories} />, document.getElementById("products"));
}