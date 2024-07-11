import React, { useEffect, useState } from 'react'
import { MdSportsSoccer } from "react-icons/md";
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
                className=' text-center w-auto leftBar flex justify-around items-center gap-2  mt-4 py-2'>
                Centres d'interets <MdSportsSoccer />
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

