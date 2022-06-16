import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {Btn1, Btn2, Btn3, Btn6, Btn7, CreditCard, MinCardShop} from '../components/Buttons'

const CardUser = (props) => {
    const [user, setUser] = useState(JSON.parse(props.user))
    const [shops, setShops] = useState(JSON.parse(props.shops))

  return (
    <div className='w-full flex justify-center'>
        <div className='w-full rounded flex flex-col justify-center items-center md:w-[931px] bg-setBlue-200 p-3'>

            <Btn2 slot="perfil de usuario"></Btn2 >

            <div className='m-3 w-32 h-32 sm:w-48 sm:h-48 lg:w-[167px] lg:h-[167px] rounded-full shadow-lg mx-auto bg-setGray-100 z-10 overflow-hidden flex items-center'>
                <img src='' className='w-full' />
            </div>
            
            <Btn3 slot={user.name} />
            <Btn3 slot={user.email} />
            <Btn6 slot={user.address.replace(/[_]/gi, ' ')} />

            <Btn7 slot="metodos de pago"></Btn7>
            <CreditCard />

            <Btn7 slot='mis tiendas'></Btn7>
            {shops.map((shop, index) => {
                return <div key={index}>
                    <MinCardShop logo={shop.logo} banner={shop.banner} name={shop.name.replace(/[_]/gi, ' ')}></MinCardShop>
                </div>
            }
            )}
            <Btn1 slot='Crear Tienda' route='/shops/create'></Btn1>
        </div>
    </div>
  )
}

export default CardUser
if (document.getElementById("card-user")) {
    let user = document.getElementById('card-user').getAttribute('user');
    let shops = document.getElementById('card-user').getAttribute('shops');
    ReactDOM.render(<CardUser user={user} shops={shops} />, document.getElementById("card-user"));
}