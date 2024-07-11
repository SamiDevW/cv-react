import React, { useEffect, useState } from 'react'
import Profil from './Profil'
import { IoMdLogIn } from "react-icons/io";
import Introduction from './Introduction';
import { Link } from 'react-router-dom';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
const url = "https://cv-react-api.onrender.com"
export default function Contact() {
    const [data, setData] = useState([])
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [status, setStatus] = useState('')
    async function fetchContact() {
        const response = await fetch(url + "/contact")
        const data = await response.json()
        console.log(data);

        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
        setStatus(data[0].status)
        setData(data)
    }
    useEffect(() => {
        fetchContact()
    }, [])
    return (
        <div >
            {data.length > 0 &&
                <div className='flex justify-between '>
                    <Profil nom={nom} prenom={prenom} status={status} />
                    {/* <Introduction /> */}
                    <section>
                        <div className='flex flex-col h-full font-bold  justify-between textContacts'>
                            <div className='flex justify-end' >
                                <button title='Log in to modify the CV' className='buttons  btn btn-outline my-1  font-bold '>
                                    LOGIN <Link to="/admin">
                                        <IoMdLogIn size={24} />
                                    </Link>
                                </button>
                            </div>
                            <div>
                                <p className='flex items-center gap-1'><HiMiniDevicePhoneMobile />{tel}</p>
                                <p className='flex items-center gap-1'><MdAlternateEmail />{email}</p>
                                <p className='flex items-center gap-1'><MdGpsFixed />{adresse}</p>
                            </div>
                        </div>
                    </section>
                </div>
            }

        </div>

    )
}
