
import React, { useEffect, useState } from 'react'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
const url = 'https://cv-react-api.onrender.com/introduction'


export default function Introduction() {
    const [introText, setIntroText] = useState([])
    async function fetchIntro() {
        try {
            const response = await fetch(url)
            if (response.ok) {

                const data = await response.json()
                console.log(data[0])
                setIntroText(data[0].introText)


            }
        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        fetchIntro();
    }, [])
    async function updateIntro() {
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ introText })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
        }

    }

    return (
        <div className=' w-1/2'>
            <h2 className='leftBar'>INTRO</h2>
            <div>
                <textarea
                    className=' text-white w-full h-full'
                    value={introText}
                    onChange={(e) => setIntroText(e.target.value)}
                >

                </textarea>

                <button
                    onClick={updateIntro}
                    className='btn btn-outline btn-success my-1'
                    title='save'><PiFloppyDiskBackBold />
                </button>

            </div>
        </div>
    )
}
