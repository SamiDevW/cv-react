import React from 'react'
import Profil from '../components/Profil'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Langues from '../components/Langues'
import Interets from '../components/Interets'
import Profesionelle from '../components/Profesionelle'
import Formation from '../components/Formation'
export default function Home() {
    return (
        <body className=' bg-slate-50 text-black'>

            <main className=' pt-9'>
                <section className=' w-full'>
                    
                    <Contact />
                    <Competences />
                    <Langues />
                    <Interets />
                </section>
                <section className=' w-full'>
                    <Profesionelle />
                    <Formation />
                </section>
            </main>
        </body>
    )
}
