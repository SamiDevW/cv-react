import React from 'react'

export default function Profil(props) {
    return (

        <div className='flex flex-col  items-center'>

            <img className=' w-36 ' src="./images/Screenshot 2024-06-24 133634.png" alt="" />
            <h2 className='text-center p-2 w-auto rounded-xl'>{props.nom} {props.prenom}</h2>
            {/* <p>BENSEGHIR SAMI</p> */}
        </div>

    )
}
