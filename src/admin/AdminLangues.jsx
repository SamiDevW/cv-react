import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { MdCancel, MdDelete } from 'react-icons/md'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
const url = "https://cv-react-api.onrender.com/langues"
export default function AdminLangues() {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [langues, setLangues] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    async function fetchLangues() {
        const response = await fetch(url)
        const data = await response.json()
        setLangues(data)
        console.log(data);
    }
    useEffect(() => {
        fetchLangues();
    }, [])
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, level })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchLangues();

        }
    }
    async function handleDelete(id) {
        const response = await fetch(url + `/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchLangues()
        }
    }
    function addLangue() {
        setIsAdd(true)
    }
    function handleCancel() {
        setIsAdd(false)
    }
    return (
        <div>

            <h2 className='text-center w-auto bg-orange-600 rounded-xl mt-4 py-2'>
                Langues
            </h2>
            <button
                className='btn btn-outline btn-info my-1'
                onClick={addLangue}>
                <CiCirclePlus size={24} />
            </button>
            {isAdd && <form
                className='flex'
                onSubmit={handleSubmit}>
                <input
                    className="customInput input input-bordered input-primary w-full"
                    type="text"
                    onChange={(e) => setName(e.target.value)}

                />
                {/* <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    onChange={(e) => setLevel(e.target.value)}


                /> */}
                <select
                    className='customInput select select-secondary w-full max-w-xs'
                    onChange={(e) => setLevel(e.target.value)}>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermediaire">Intermediaire</option>
                    <option value="Avancé">Avancé</option>
                    <option value="Maternel">Maternel</option>
                </select>
                <button
                    className='btn btn-outline btn-success my-1'
                    title='save'>
                    <PiFloppyDiskBackBold />
                </button>
                <button
                    className='btn btn-outline btn-error my-1'
                    onClick={handleCancel}>
                    <MdCancel />
                </button>
            </form>}

            <table  >
                {langues && langues.map(item =>

                    <tr className='secondaryBg' key={item._id} >
                        <th>{item.name}:</th>
                        <td>{item.level}</td>
                        {/* <td>{item._id}</td> */}
                        <td>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className='btn btn-error text-white my-1'>
                                <MdDelete /></button>
                        </td>

                    </tr>

                )}

            </table>
        </div>
    )
}
// 