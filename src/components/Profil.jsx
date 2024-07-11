import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Profil({ nom, prenom, status }) {
    return (

        <div className='flex items-start'>
            <img className=' w-44 rounded-full border-4' src="./images/CV_2024-06-25_Sami_BENSEGHIR.jpg" alt="" />
            <div className='flex flex-col justify-end h-full'>
                <h3 className='text-start pl-3 text-2xl bg-transparent border-transparent font-bold w-auto rounded-xl'>{nom} {prenom}</h3>
                <h3 className='text-start pl-3 text-xl w-3/4 bg-transparent border-transparent font-bold rounded-xl'>{status}</h3>
                <h3 className='flex pl-3 justify-start gap-2'><FaLinkedin size={20} /> <FaGithub size={20} /></h3>
            </div>
        </div>

    )
}
