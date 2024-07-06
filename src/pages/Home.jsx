import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Langues from '../components/Langues'
import Interets from '../components/Interets'
import Profesionelle from '../components/Profesionelle'
import Formation from '../components/Formation'
import RingLoader from "react-spinners/RingLoader";
const url = "https://cv-react-api.onrender.com/contact"
export default function Home() {

    async function isData() {
        const response = fetch(url)
        if (response.ok) {
            const tab = await (await response).json()
            return tab

        }

    }
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const data = isData()
        if (data) {
            setLoading(false)
        }


    }, [])
    const color = 'white'
    return (
        // if loading is true "loading ?"  then do what is after ':'
        <div>

            {
                loading ?
                    <div className='gradBg flex justify-center items-center w-full h-screen '>

                        <RingLoader
                            color={color}
                            loading={loading}
                            // cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div className='gradBg text-black flex flex-col '>
                        <section className=' '>
                            <Contact />
                        </section>
                        <div className='flex'>

                            <section className='  ml-3 secondaryBg w-1/4 p-1  rounded-lg h-fit'>
                                <Competences />
                                <Langues />
                                <Interets />
                            </section>
                            <section className='  ml-3 w-3/4 mr-3'>
                                <Formation />
                                <Profesionelle />
                            </section>
                        </div>
                    </div>}

        </div>
    )
}
