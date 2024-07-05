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
        <div>

            {data.length > 0 &&
                <div>
                    <Profil nom={nom} prenom={prenom} />
                    <h2
                        className=' text-center w-auto  rounded-xl mt-4 p-2'>
                        Contacts</h2>
                    <div>
                        <tr>
                            <th>TEL:</th>
                            <td>{tel}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th>Adresse:</th>
                            <td>{adresse}</td>
                        </tr>

                    </div>
                </div>
            }


        </div>

    )
}
