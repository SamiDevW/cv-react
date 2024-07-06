
import '../custom.css'
import React, { useEffect, useState } from 'react'
const url = "https://cv-react-api.onrender.com/experience"
export default function Profesionelle() {
    const [experiences, setExperiences] = useState([])
    async function fetchExperiences() {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setExperiences(data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        fetchExperiences()
    }, [])
    return (
        <div className=''>
            <h2
                className='rightBar text-center w-auto py-2'>
                Experiences profesionelles
            </h2>
            <div>

                {experiences && experiences.map((x) => (
                    <div key={x._id} className='mb-2 secondaryBg '>
                        <tr>
                            <th>Année: </th>
                            <td>{x.year}</td>

                        </tr>
                        <tr>
                            <th>Entreprise: </th>
                            <td>{x.company}</td>
                        </tr>
                        <tr>
                            <th>Mission: </th>
                            <td>{x.mission}</td>
                        </tr>
                    </div>
                ))}
            </div>
        </div>
    );

}
