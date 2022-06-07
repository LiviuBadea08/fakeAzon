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
            
            <Rbutton event={ sumar } slot= "+1" />
            
            <Rbutton event={ restar } slot= "-1" />

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
