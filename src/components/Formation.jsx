import React from 'react'

export default function Formation() {
    const formations = [{
        year: 2000,
        establisement: "stanford",
        diplome: 'master'
    }, {
        year: 2000,
        establisement: "stanford",
        diplome: 'master'
    }, {
        year: 2000,
        establisement: "stanford",
        diplome: 'master'
    }]
    console.log(formations[0].establisement);
    return (
        <div className=''>
            <h2 className='text-center w-auto bg-orange-600 rounded-xl'>Formations</h2>
            {formations && formations.map((x, index) => (
                <div key={index} className='mb-4'>
                    <p>Année: <span>{x.year}</span></p>
                    <p>Etablissement: <span>{x.establisement}</span></p>
                    <p>Diplome: <span>{x.diplome}</span></p>
                </div>
            ))}
        </div>
    );
}
