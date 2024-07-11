import React from 'react'

export default function Login({ userName, pwd, setUserName, setPwd, handleSubmit }) {

    return (
        <div className='loadingBg flex flex-col justify-center h-screen items-center'>
            <h2 className='text-center text-2xl  rounded-lg mt-4 p-2'>CONNEXION</h2>
            <form onSubmit={handleSubmit} className='w-[400px] flex flex-col gap-3'>
                <input className=" customInput input input-bordered input-primary w-full"
                    type="text"
                    placeholder='Set UserName'
                    value={userName}
                    onChange={setUserName} />
                <input className="customInput input input-bordered input-primary w-full"
                    type="password" placeholder='Set Pwd'
                    value={pwd}
                    onChange={setPwd} />
                <button className='btn btn-outline btn-success my-1'>Connect</button>
            </form>
        </div>
    )
}
