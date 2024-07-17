
import React, { useEffect, useState } from 'react'
import { url } from '../Config/Config';

export default function Introduction() {
  const [intro, setIntro] = useState([])
  async function fetchIntro() {
    try {
      const response = await fetch(url + 'introduction')
      if (response.ok) {

        const data = await response.json()
        console.log(data[0])
        setIntro(data[0])


      }
    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    fetchIntro();
  }, [])

  return (
    <div className='  flex flex-col justify-start items-start'>
      <strong className=''>A propos de moi:</strong>
      <div className='overflow-hidden h-full w-1/2'>
        {intro &&
          <p className='text-start text-s w-3/4 text-wrap' >{intro.introText}</p>}
      </div>
    </div>
  )
}
