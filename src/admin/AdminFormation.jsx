import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { MdCancel, MdDelete } from 'react-icons/md'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import '../custom.css'
const url = "https://cv-react-api.onrender.com/training"
export default function AdminFormation() {
    const [trainings, setTrainings] = useState([])
    const [establishment, setEstablishment] = useState('')
    const [year, setYear] = useState('')
    const [degree, setDegree] = useState('')
    const [isAdd, setIsAdd] = useState(false)
    async function fetchTrainings() {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setTrainings(data)
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchTrainings();

    }, [])
    async function saveTraining(e) {
        e.preventDefault()
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ year, establishment, degree })
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                fetchTrainings()
            }
        } catch (error) {
            console.log(error);
        }

    }
    async function deleteExperince(id) {
        try {
            const response = await fetch(url + `/${id}`, {
                method: 'DELETE'
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                fetchTrainings();
            }
        } catch (error) {
            console.log(error);
        }

    }
    function addTraining() {
        setIsAdd(true)
    }
    function handleCancel() {
        setIsAdd(false)
    }
    return (
        <div className=''>
            <h2
                className='text-center w-auto  rounded-xl mt-4 py-2'>
                Formations
            </h2>
            <button
                className='btn btn-outline btn-info my-1'
                onClick={addTraining}>
                <CiCirclePlus size={24} />
            </button>
            {isAdd && <form
                className='flex flex-col items-start gap-4  w-full'
                onSubmit={saveTraining}>
                <div className='flex flex-col w-3/6'>

                    <input type="text"
                        className='customInput input input-bordered input-primary'
                        placeholder='Insert the year...'
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                    <input type="text"
                        className='customInput input input-bordered input-primary'
                        placeholder='Insert establishment name...'
                        onChange={(e) => { setEstablishment(e.target.value) }}
                    />
                    <input type="text"
                        className='customInput input input-bordered input-primary'
                        placeholder='Insert the degree...'
                        onChange={(e) => { setDegree(e.target.value) }}
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

            {trainings && trainings.map((x) => (
                <div
                    key={x._id}
                    className='mb-2 secondaryBg  '>
                    <tr>

                        <th>Année: </th>
                        <td>{x.year}</td>

                    </tr>
                    <tr>
                        <th>Etablissement: </th>
                        <td>{x.establishment}</td>
                    </tr>
                    <tr>
                        <th>Diplome: </th>
                        <td>{x.degree}</td>
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
    )
}




