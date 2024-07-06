import React from 'react'
import '../custom.css'
export default function AdminProfil(props) {
    return (

        <div className='flex items-center'>

            <img className=' w-36 ' src="./images/Screenshot 2024-06-24 133634.png" alt="" />
            <div className=' self-center'>
                <h1 className='text-center w-auto rounded-xl font-bold'>{props.nom} {props.prenom}</h1>
            </div>

        </div>

    )
}
