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
    const color = 'white'
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        // if loading is true "loading ?"  then do what is after ':'
        <div>
            {loading ?
                <div className='loadingBg flex justify-center items-center w-full h-screen '>
                    <div>

                        <RingLoader
                            color={color}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        <p className='text-white text-center font-bold'>IMPORTING DATA...</p>
                    </div>
                </div>
                :

                <div className='pagesBg text-black flex flex-col'>

                    <section className='contactBlock  border-gray-900 border-2 p-2 m-2 '>
                        <Contact />
                    </section>
                    <div className='flex'>
                        <section className='leftBlock   ml-3  w-1/4 p-1  rounded-lg h-fit'>
                            <Competences />
                            <Langues />
                            <Interets />
                        </section>
                        <section className='rightBlock  ml-3 w-3/4 mr-3'>
                            <Formation />
                            <Profesionelle />
                        </section>
                    </div>
                </div>}

        </div>
    )
}
