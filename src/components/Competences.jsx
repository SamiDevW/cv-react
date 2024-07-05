import React, { useEffect, useState } from 'react'

export default function Competences() {
    const [competences, setCompetences] = useState('')
    async function fetchCompetence() {
        const response = await fetch('https://cv-react-api.onrender.com/competence')
        const data = await response.json()
        console.log(data);
        setCompetences(data)
    }
    useEffect(() => {
        fetchCompetence()
    }, [])

    // const competences = ['CSS', 'HTML', 'WORDPRESS', 'Python'];
    return (
        <div >
            <h2 className=' text-center w-auto bg-orange-600 rounded-xl'>Competences</h2>
            {competences && competences.map(item => <p>{item.skill}</p>)}

        </div>
    )
}
