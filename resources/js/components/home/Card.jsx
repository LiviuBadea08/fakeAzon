import React, {useState, useEffect} from 'react'

const Card = (props) => {
    const [shop, setShop] = useState(props.shop)
    const [shopId, setShopId] = useState(props.shopId)
    const [product, setProduct] = useState(JSON.parse(props.product))
    const [route, setRoute] = useState("products/");

    useEffect(() => {
      console.log(props)
    }, [])
    
  return (
    <div className='flex flex-col bg-setBlue-100 w-full lg:w-[725px] p-[20px] mb-3 lg:mt-4 rounded'>
        <a href={'shops/' + shopId}><h1 className='font-bold font-source uppercase text-setGray-100 text-center text-3xl lg:text-5xl mb-5 mt-3'>{shop}</h1></a>
        <div className='w-full flex justify-center'>
            <a href={route + product[0].id} className='h-[20rem] w-[20rem] lg:h-[450px] lg:w-[450px] overflow-hidden rounded bg-black other-card relative mb-5 lg:mb-0'>
                <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+product[0].picture+`)` }} ></div>
                <div><h3 className='font-bold font-source text-setGray-100 text-2xl'>{product[0].name.replace(/[_]/gi, ' ')}</h3></div>
            </a>
        </div>
    </div>
  )
}

export default Card;
