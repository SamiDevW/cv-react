import React from 'react'

export default function Profil(props) {
    return (

        <div className='flex items-center'>
            <img className=' w-36 ' src="./images/Screenshot 2024-06-24 133634.png" alt="" />
            <div className=' self-end'>
                <h1 className='text-center bg-transparent border-transparent font-bold w-auto rounded-xl'>{props.nom} {props.prenom}</h1>
            </div>
        </div>

    )
}
