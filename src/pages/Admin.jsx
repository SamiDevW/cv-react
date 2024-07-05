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
    const [isLogged, setIsLogged] = useState(true)
    function handleSubmit(e) {
        e.preventDefault()
        if (userName === 'ok' && pwd === 'ok') {
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
        <div className='bg-white text-black flex '>
            <section className='ml-3 w-1/4'>
                <AdminContact />
                <AdminCompetences />
                <AdminLangues />
                <AdminInterets />
            </section>
            <section className='ml-3 w-3/4 mr-3'>
                <AdminExperience />
                <AdminFormation />
            </section>

        </div>
    )
}
