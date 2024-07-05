import React, { useEffect, useState } from 'react'
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
            <h2 className='text-center w-auto  rounded-xl mt-4 py-2'>
                Langues
            </h2>
            <div  >
                {langues && langues.map(item =>
                    <tr className='secondaryBg w-full' key={item._id} >
                        <td className='flex justify-between w-full'><span className='  font-bold'>{item.name}</span> : {item.level} </td>
                    </tr>
                )}

            </div>
        </div>
    )
}
