import React from 'react'

export default function Interets() {
    const interets = ['tenis', 'foot']
    return (
        <div >
            <h2 className=' text-center w-auto bg-orange-600 rounded-xl'>Centres d'interets</h2>
            {interets && interets.map(item => <p>{item}</p>)}
        </div>
    )
}

