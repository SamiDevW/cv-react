import React, { useEffect, useState } from 'react'
import Profil from './Profil'
const url = "https://cv-react-api.onrender.com"
export default function Contact() {
    const [data, setData] = useState([])
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    async function fetchContact() {
        const response = await fetch(url + "/contact")
        const data = await response.json()
        console.log(data);

        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
        setData(data)
    }
    useEffect(() => {
        fetchContact()
    }, [])
    return (
        <div className='p-2'>
            {data.length > 0 &&
                <div className='flex justify-between'>
                    <Profil nom={nom} prenom={prenom} />
                    <div className='flex flex-col h-full  content-center'>
                        <div>
                            <p>{tel}</p>
                            <p>{email}</p>
                            <p>{adresse}</p>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}
