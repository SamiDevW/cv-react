
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
                className='rightTitles  py-2'>
                Experiences profesionelles
            </h2>
            <div className='careerBlock'>

                {experiences && experiences.map((x) => (
                    <div key={x._id} className='  '>
                        <tr>
                            <td className='font-bold'>{x.company}</td>
                        </tr>
                        <tr>
                            <td>{x.year}</td>
                        </tr>
                        <tr>
                            <td>{x.mission}</td>
                        </tr>
                    </div>
                ))}
            </div>
        </div>
    );

}
