import React, { useState } from 'react'
import AdminContact from '../admin/AdminContact'
import AdminCompetences from '../admin/AdminCompetences'
import AdminLangues from '../admin/AdminLangues'
import AdminInterets from '../admin/AdminInterets'
import Login from './Login'
import '../custom.css'
import AdminExperience from '../admin/AdminExperience'
import AdminFormation from '../admin/AdminFormation'

export default function Admin() {
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        if (userName === localStorage.getItem('username') && pwd === localStorage.getItem('password')) {
            setIsLogged(true)
        }
    }
    if (!isLogged) {
        return (
            <Login
                userName={userName}
                pwd={pwd}
                setUserName={(e) => setUserName(e.target.value)}
                setPwd={(e) => setPwd(e.target.value)}
                handleSubmit={handleSubmit}
            />
        )
    }
    return (
        <div className='pagesBg text-white flex flex-col '>
            <section className='contactBlock  border-gray-900 border-2 p-2 m-2'>
                <AdminContact />
            </section>
            <section className='flex justify-center'>
            <div className='flex careerBlock flex-col justify-center w-1/2'>
                    <AdminCompetences />
                    <AdminLangues />
                    <AdminInterets />
                    <AdminFormation />
                    <AdminExperience />
            </div>
            </section>

        </div>
    )
}
