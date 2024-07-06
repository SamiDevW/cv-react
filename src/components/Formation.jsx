import React, { useEffect, useState } from 'react'
const url = "https://cv-react-api.onrender.com/training"
export default function Formation() {
    const [trainings, setTrainings] = useState([])
    async function fetchTrainings() {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setTrainings(data)
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchTrainings();

    }, [])
    return (
        <div className=''>
            <h2
                className=' rightBar text-center w-auto   mt-4 py-2'>
                Formations
            </h2>
            {trainings && trainings.map((x) => (
                <div
                    key={x._id}
                    className='mb-2 secondaryBg  '>
                    <tr>
                        <th>Année: </th>
                        <td>{x.year}</td>
                    </tr>
                    <tr>
                        <th>Etablissement: </th>
                        <td>{x.establishment}</td>
                    </tr>
                    <tr>
                        <th>Diplome: </th>
                        <td>{x.degree}</td>
                    </tr>

                </div>

            ))}
        </div>
    );
}
