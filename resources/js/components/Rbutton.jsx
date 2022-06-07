import React from 'react'

const Rbutton = ( props ) => {

    return (
        <div >
            <div className="bg-black text-white text-6xl " onClick={ props.event } >
                { props.slot } hello


            </div>
        </div>
    )
    }

export default Rbutton