import React, { useEffect, useState } from 'react'
import { FaLanguage } from "react-icons/fa6";
import '../custom.css'
const url = "https://cv-react-api.onrender.com/langues"
export default function Langues() {
    const [langues, setLangues] = useState([])
    async function fetchLangues() {
        const response = await fetch(url)
        const data = await response.json()
        setLangues(data)
        console.log(data);
    }
    useEffect(() => {
        fetchLangues();
    }, [])

    return (

        <div >
            <h2 className='leftBar text-center w-auto flex justify-around items-center gap-2   mt-4 py-2'>
                Langues <FaLanguage size={26} />
            </h2>
            <div  >
                {langues && langues.map(item =>
                    <p className='flex secondaryBg  items-center'>
                        <span className=' w-full '><strong>{item.name}</strong>: {item.level}</span>
                    </p>
                )}

            </div>
        </div>
    )
}
