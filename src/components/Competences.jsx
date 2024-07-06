import React, { useEffect, useState } from 'react'
import '../custom.css'
const url = 'https://cv-react-api.onrender.com/competence'
export default function Competences() {
    const [competences, setCompetences] = useState('')
    async function fetchCompetences() {
        const response = await fetch(url) // url linked to the server
        const data = await response.json()
        console.log(data);
        setCompetences(data)
    }
    useEffect(() => {
        fetchCompetences()
    },
        [])
    return (
        <div>

            <h2
                className='leftBar text-center w-auto  mt-4 py-2'>
                Competences</h2>
            <div >
                {competences && competences.map(item =>
                    <div className='secondaryBg flex items-center gap-9 justify-between' key={item._id}>
                        <p>{item.skill}</p>
                    </div>)}
            </div>
        </div>


    )
}
