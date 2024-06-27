import React from 'react'

export default function Profesionelle() {
    const experiences = [{
        year: 2000,
        entreprise: "stanford",
        mission: 'master'
    }, {
        year: 2000,
        entreprise: "stanford",
        mission: 'master'
    }, {
        year: 2000,
        entreprise: "stanford",
        mission: 'master'
    }]

    return (
        <div className=''>
            <h2 className='text-center w-auto bg-orange-600 rounded-xl'>Experiences profesionelles</h2>
            {experiences && experiences.map((x, index) => (
                <div key={index} className='mb-4'>
                    <p>Année: <span>{x.year}</span></p>
                    <p>Entreprise: <span>{x.entreprise}</span></p>
                    <p>Mission: <span>{x.mission}</span></p>
                </div>
            ))}
        </div>
    );

}
