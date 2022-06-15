import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Banner = (props) => {
    const [shop, setShop] = useState(JSON.parse(props.data))
  return (
    <>
        <div className='bg-setBlue-200 flex justify-center items-center h-[70px]'>
            <h1 className='text-setGray-100 text-center font-bold font-source uppercase text-3xl'>{shop.name.replace(/[_]/gi, ' ')}</h1>
        </div>

        <div className="overflow-hidden relative h-48 sm:h-64 xl:h-80 2xl:h-96 flex justify-center items-center">
            <div className='w-32 h-32 sm:w-48 sm:h-48 lg:w-[250px] lg:h-[250px] rounded-full shadow-lg mx-auto bg-setGray-100 z-10 overflow-hidden flex items-center'>
                <img src={shop.logo} className='w-full' />
            </div>
            <div style={{ backgroundImage: `url(`+shop.banner+`)` }} className="slide"></div>
        </div>

        
    </>
  )
}

export default Banner;
if (document.getElementById("banner")) {
    let data = document.getElementById('banner').getAttribute('data');
    ReactDOM.render(<Banner data={data} />, document.getElementById("banner"));
}