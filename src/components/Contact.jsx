import React, { useEffect, useState } from 'react'
import Profil from './Profil'
const BASE_URL = "https://cv-react-api.onrender.com"
export default function Contact() {
    const [contact, setContact] = useState([])
    async function getContact() {
        const response = await fetch(`${BASE_URL}/contact`)
        const data = await response.json()
        setContact(data)
        console.log(data);
    }
    useEffect(() => {
        getContact()
        // console.log(contact);
    }, [])
    return (
        <div>

            {contact.length > 0 &&
                <div>
                    <Profil nom={contact[0].nom} prenom={contact[0].prenom} />
                    <h2 className='text-center w-auto bg-orange-600 rounded-xl'>Contact</h2>
                    <table>
                        <tr>
                            <th>TEL:</th>
                            <td>{contact[0].tel}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{contact[0].email}</td>
                        </tr>
                        <tr>
                            <th>Adresse:</th>
                            <td>{contact[0].adresse}</td>
                        </tr>

                    </table>
                </div>
            }


        </div>
        // <div >
        //     <h2 className=' text-center w-auto bg-orange-600 rounded-xl'>Contact</h2>
        //     {contacts && contacts.map((x, index) => (
        //         <div key={index} className='mb-4'>
        //             <p>Tel: <span>{x.tel}</span></p>
        //             <p>Mail: <span>{x.mail}</span></p>
        //             <p>Adresse: <span>{x.adress}</span></p>
        //         </div>
        //     ))}


        // </div>
    )
}
