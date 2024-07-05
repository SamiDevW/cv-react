
import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { MdCancel, MdDelete } from 'react-icons/md'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import '../custom.css'
const url = "https://cv-react-api.onrender.com/experience"
export default function AdminExperience() {
  const [experiences, setExperiences] = useState([])
  const [year, setYear] = useState('')
  const [company, setCompany] = useState('')
  const [mission, setMission] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  async function fetchExperiences() {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setExperiences(data)
        console.log(data);
      }
    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    fetchExperiences()
  }, [])
  async function saveExperience(e) {
    e.preventDefault()
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ year, company, mission })
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        fetchExperiences()
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteExperince(id) {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        fetchExperiences();
      }
    } catch (error) {
      console.log(error);
    }

  }
  function addExperience() {
    setIsAdd(true)
  }
  function handleCancel() {
    setIsAdd(false)
  }
  return (
    <div>
      <h2
        className='text-center w-auto  rounded-xl mt-4 py-2'>
        Experiences profesionelles
      </h2>
      <button
        className='btn btn-outline btn-info my-1'
        onClick={addExperience}><CiCirclePlus size={24} />
      </button>
      {isAdd && <form
        className='flex flex-col items-start gap-4  w-full'
        onSubmit={saveExperience}>
        <div className='flex flex-col w-3/6'>

          <input type="text"
            className='customInput input input-bordered input-primary'
            placeholder='Insert the year...'
            onChange={(e) => { setYear(e.target.value) }}
          />
          <input type="text"
            className='customInput input input-bordered input-primary'
            placeholder='Insert company name...'
            onChange={(e) => { setCompany(e.target.value) }}
          />
          <input type="text"
            className='customInput input input-bordered input-primary'
            placeholder='Insert the description...'
            onChange={(e) => { setMission(e.target.value) }}
          />
        </div>
        <div className='flex gap-3'>

          <button
            className="btn btn-outline btn-success my-1">
            <PiFloppyDiskBackBold />
          </button>
          <button
            className='btn btn-outline btn-error my-1'
            onClick={handleCancel}>
            <MdCancel />
          </button>
        </div>
      </form>}

      <div>

        {experiences && experiences.map((x) => (
          <div key={x._id} className='mb-2 secondaryBg '>

            <tr>

              <th>Année: </th>
              <td>{x.year}</td>

            </tr>
            <tr>
              <th>Entreprise: </th>
              <td>{x.company}</td>
            </tr>
            <tr>
              <th>Mission: </th>
              <td>{x.mission}</td>
              {/* <td>{x._id}</td> */}

            </tr>
            <tr>
              <td>
                <button onClick={() => { deleteExperince(x._id) }}
                  className='btn btn-error text-white my-1'>
                  <MdDelete />
                </button>
              </td>
            </tr>
          </div>
        ))}
      </div>
    </div>
  )

}
