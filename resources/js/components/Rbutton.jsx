import React from 'react'

const Rbutton = ( props ) => {

    return (
        <div >
            <div  onClick={ props.event } >
                { props.slot } hello


            </div>
        </div>
    )
    }

export default Rbutton