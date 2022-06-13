import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import Card from './Card';

const SecondCard = (props) => {
  return (
    <div className='flex flex-row flex-wrap justify-between w-full'>
      <Card shop={props.shop1.replace(/[_]/gi, ' ')} product={props.product1} className='w-full' />
      <Card shop={props.shop1.replace(/[_]/gi, ' ')} product={props.product1} />
    </div>
  )
}

export default SecondCard;
if (document.getElementById("second-card")) {
  let shop1 = document.getElementById("second-card").getAttribute('shop1');
  let product1 = document.getElementById("second-card").getAttribute('product1');
  ReactDOM.render(<SecondCard shop1={shop1} product1={product1} />, document.getElementById("second-card"));
}