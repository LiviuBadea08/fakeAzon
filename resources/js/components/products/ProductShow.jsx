import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Btn4 } from "../Buttons";

const ProductShow = (props) => {
	const [product, setProduct] = useState(JSON.parse(props.product))
	const [shop, setShop] = useState(JSON.parse(props.shop))
	const [user, setUser] = useState(JSON.parse(props.user))
    return (
        <div className="bg-setBlue-100 font-source flex flex-col items-center p-[20px] rounded relative f-full sm:flex-col">
            <div className="flex flex-col lg:flex-row justify-around w-full lg:flex-nowrap mt-3 mb-3">
                {/* IMAGE CONTAINER */}
                <div className="flex flex-col items-center w-full mb-5">
                    <a href="" className="h-[20rem] w-[20rem] lg:h-[540px] lg:w-[540px] overflow-hidden rounded bg-black">
                        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(`+ product.picture + `)` }}></div>
                    </a>
                </div>
                {/* TEXT CONTAINER */}
                <div className="w-full flex items-center justify-center">
                    <div className="flex flex-col w-full md:w-4/5 justify-between w-full mb-5 space-y-10 text-setGray-100 font-black">
                        <h1 className="text-center text-3xl lg:text-5xl capitalize">
                            {product.name.replace(/[_]/gi, ' ')}
                        </h1>

                        <h1 className=" text-2xl lg:text-3xl font-normal text-left">
                            {product.description.replace(/[_]/gi, ' ')}
                        </h1>

                        <div className="text-left flex flex-col text-3xl lg:text-4xl ">
                            <h1 className="flex">
                                Precio:
                                <p className="flex text-2xl lg:text-3xl items-center font-normal ml-2">
                                    {product.price} €
                                </p>
                            </h1>

                            <h1 className="flex">
                                Tienda:
                                <a href={'/shops/' + shop.id} className="flex text-2xl lg:text-3xl items-center font-normal ml-2">
                                    {shop.name.replace(/[_]/gi, ' ')}
                                </a>
                            </h1>

                            <h1 className="flex">
                                Vendedor:
                                <p className="flex text-2xl lg:text-3xl items-center font-normal ml-2">
                                    {user.name.replace(/[_]/gi, ' ')}
                                </p>
                            </h1>
                        </div>

                        <div className="w-full">
                            <Btn4 slot="Agregar al Carrito"></Btn4>
                            <Btn4 slot="Comprar"></Btn4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShow;

if (document.getElementById("product-show")) {
    let product = document.getElementById("product-show").getAttribute("product");
    let shop = document.getElementById("product-show").getAttribute("shop");
    let user = document.getElementById("product-show").getAttribute("user");
    ReactDOM.render(
        <ProductShow product={product} shop={shop} user={user} />,document.getElementById("product-show")
    );
}
