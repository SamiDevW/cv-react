import React, { useEffect, useState } from 'react'
const url = "https://cv-react-api.onrender.com/interets"
export default function Interets() {
    const [interets, setInterets] = useState([])
    async function fetchInterets() {
        const response = await fetch(url)
        const data = await response.json()
        setInterets(data)

    }
    useEffect(() => {
        fetchInterets();
    }, [])
    return (
        <div>
            <h2
                className=' text-center w-auto  rounded-xl mt-4 py-2'>
                Centres d'interets
            </h2>
            <div >
                {interets && interets.map(item =>
                    <div className='secondaryBg  flex justify-between  items-center gap-9'>
                        <p>{item.activity} </p>
                    </div>)}
            </div>
        </div>
    )
}

