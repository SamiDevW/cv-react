import React, { useState } from 'react'
import AdminContact from '../admin/AdminContact'
import AdminCompetences from '../admin/AdminCompetences'
import AdminLangues from '../admin/AdminLangues'
import AdminInterets from '../admin/AdminInterets'
import Login from './Login'


export default function Admin() {
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLogged, setIsLogged] = useState(false)
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
        <div className='bg-slate-200 text-black '>
            <AdminContact />
            <AdminCompetences />
            <AdminLangues />
            <AdminInterets />
        </div>
    )
}
