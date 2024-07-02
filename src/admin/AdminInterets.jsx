
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { MdCancel, MdDelete } from 'react-icons/md'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
const url = "http://localhost:3500/interets"
export default function AdminInterets() {
    const [activity, setActivity] = useState('')
    const [interets, setInterets] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    async function fetchInterets() {
        const response = await fetch(url)
        const data = await response.json()
        setInterets(data)

    }
    useState(() => {
        fetchInterets();
    }, [])
    async function handleSave() {
        if (activity !== '') {
            setActivity("")
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ activity })
            }
            )
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                fetchInterets();
            }
        }
    }
    async function handleDelete(id) {
        const response = await fetch(url + `/${id}`,
            { method: 'DELETE' }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchInterets()
        }

    }
    function addActivity() {
        setIsAdd(true)
    }
    function handleCancel() {
        setIsAdd(false)
    }
    return (
        <div >
            <h2 className=' text-center w-auto bg-orange-600 rounded-xl'>Centres d'interets</h2>
            <button className='btn btn-outline btn-info my-1' onClick={addActivity}><CiCirclePlus size={24} /></button>
            {isAdd && <div className='flex'>

                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}

                />
                <button className="btn btn-outline btn-success my-1" onClick={handleSave}><PiFloppyDiskBackBold /></button>
                <button className='btn btn-outline btn-error my-1' onClick={handleCancel}><MdCancel /></button>

            </div>}
            {interets && interets.map(item =>
                <div className='flex gap-9'>
                    <p>{item.activity} </p>
                    <p>{item._id} </p>
                    <button onClick={() => { handleDelete(item._id) }} className='btn btn-error text-white my-1'><MdDelete /></button>

                </div>)}
        </div>
    )
}