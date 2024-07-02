
import React, { useEffect, useState } from 'react'
import { PiFloppyDiskBackBold } from "react-icons/pi";
import AdminProfil from './AdminProfil';

export default function AdminContact() {
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    async function fetchContact() {
        const response = await fetch("http://localhost:3500/contact")
        const data = await response.json()
        console.log(data);

        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
    }
    useEffect(() => {
        fetchContact()
    }, [])
    function handleSumbit(e) {
        e.preventDefault()
        // console.log(tel, email, adresse);
        fetch("http://localhost:3500/contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add any other required headers here
            },
            body: JSON.stringify({ nom, prenom, tel, email, adresse })
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <AdminProfil nom={nom} prenom={prenom} />
            <h2 className='text-center w-auto bg-orange-600 rounded-xl mt-4 py-2'>Contacts</h2>
            <form onSubmit={handleSumbit}>

                <div className=''>
                    <label>Tel</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className=''>
                    <label>Email</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className=''>
                    <label>Adresse</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)} />
                </div>
                <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
            </form>
        </div>
    )
}
