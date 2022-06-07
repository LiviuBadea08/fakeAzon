import React from 'react';
import Rbutton from './Rbutton';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Count() {

    const [ num, setNum  ] = useState (0) 

    const sumar = () => {
        setNum (num + 1);
    }

    const restar = () => { 
        if (num > 0) {
            setNum (num - 1 );

        };
        
    }

    return (
        <div className="count" >
            
            <div className="bg-black text-white text-6xl" >
            <Rbutton event={ sumar } slot= "+1" />
            </div>
            
            <div className="bg-orange-900 text-black text-3xl">

            <Rbutton event={ restar } slot= "-1" />
            </div>

        <p className="text-6xl text-orange-500 ">

            { num }
        </p>


        </div>
    
    );
}

export default Count;

if (document.getElementById('count')) {
    ReactDOM.render(<Count />, document.getElementById('count'));
}
