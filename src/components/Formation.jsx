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
                className='rightTitles  mt-4 py-2'>
                Formations
            </h2>
            {trainings && trainings.map((x) => (
                <div
                    key={x._id}
                    className=' careerBlock'>
                    <tr>
                        <td className='font-bold'>{x.establishment}</td>
                    </tr>
                    <tr>
                        <td>{x.year}</td>
                    </tr>

                    <tr>
                        <td>{x.degree}</td>
                    </tr>

                </div>

            ))}
        </div>
    );
}
