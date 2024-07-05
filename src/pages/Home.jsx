import React from 'react'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Langues from '../components/Langues'
import Interets from '../components/Interets'
import Profesionelle from '../components/Profesionelle'
import Formation from '../components/Formation'
export default function Home() {
    return (
        <div className='bg-white text-black flex '>
            <section className='ml-3 w-1/4'>
                <Contact />
                <Competences />
                <Langues />
                <Interets />
            </section>
            <section className='ml-3 w-3/4 mr-3'>
                <Profesionelle />
                <Formation />
            </section>

        </div>
    )
}
