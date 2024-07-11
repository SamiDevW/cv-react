
import React, { useEffect, useState } from 'react'
import { PiFloppyDiskBackBold } from "react-icons/pi";
import AdminProfil from './AdminProfil';
import AdminIntro from "./AdminIntro";
import '../custom.css'
const url = "https://cv-react-api.onrender.com/contact"
export default function AdminContact() {
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nom, setNom] = useState('BENSEGHIR')
    const [prenom, setPrenom] = useState('Sami')
    const [status, setStatus] = useState('')

    async function fetchContact() {
        const response = await fetch("https://cv-react-api.onrender.com/contact")
        if (response !== '[]') {
            const data = await response.json()
            console.log(data);
            setTel(data[0].tel)
            setEmail(data[0].email)
            setAdresse(data[0].adresse)
            setNom(data[0].nom)
            setPrenom(data[0].prenom)
            setStatus(data[0].status)


        }
    }
    useEffect(() => {
        fetchContact()
    }, [])
    async function handleSumbit(e) {
        e.preventDefault()
        // console.log(tel, email, adresse);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add any other required headers here
            },
            body: JSON.stringify({ nom, prenom, tel, email, adresse, status })
        })
        const data = await response.json()
        console.log(data);



    }
    return (

        <div className='flex justify-between'>
            <AdminProfil nom={nom} prenom={prenom} />
            <AdminIntro />
            <form
                className=' flex flex-col h-full  content-center secondaryBg p-2 m-2 rounded-lg'
                onSubmit={handleSumbit}>

                <div >
                    <label>Tel</label>
                    <input
                        className=" customInput input input-bordered input-primary  w-full"
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className=''>
                    <label>Email</label>
                    <input
                        className=" customInput input input-bordere input-primary w-full"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className=''>
                    <label>Adresse</label>
                    <input
                        className="customInput input input-bordered  input-primary w-full"
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)} />
                </div>
                <div className=''>
                    <label>Adresse</label>
                    <input
                        className="customInput input input-bordered  input-primary w-full"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} />
                </div>
                <button
                    className='btn btn-outline btn-success my-1'
                    title='save'><PiFloppyDiskBackBold />
                </button>
            </form>
        </div>

    )

}
