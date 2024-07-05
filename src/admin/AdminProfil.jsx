import React from 'react'
import '../custom.css'
export default function AdminProfil(props) {
    return (

        <div className='flex flex-col  items-center'>

            <img className=' w-36 ' src="./images/Screenshot 2024-06-24 133634.png" alt="" />
            <h2 className='text-center w-auto rounded-xl'>{props.nom} {props.prenom}</h2>

        </div>

    )
}
