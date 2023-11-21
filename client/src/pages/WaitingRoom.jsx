import axios from "axios"
import { useEffect, useState } from "react"

export const WaitingRoom = ({setHiddenModal, roomId}) => {
    const [value, setValue] = useState({})
    useEffect(() => {
        const getRoomData = async() => {
            const {data} =  await axios.get(`http://localhost:3000/rooms/${roomId}`,{
                headers : {Authorization : `${localStorage.access_token}`}
            })
            setValue(data)
        }
        
        getRoomData()

    }, [])

    return (
        <>
        
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-40 bg-black z-50">
        <div className="w-full fixed z-40 mx-auto mt-24 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Waiting Room
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
            <ul className="my-4 space-y-3">
            
                <li>
                    <label htmlFor="" className="text-gray-400 font-semibold">User ID 1</label>
                    <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">{value.player1 ? value.player1.username : 'No Player'}</span>
                    </a>
                </li>
                <li>
                    <label htmlFor="" className="text-gray-400 font-semibold">User ID 2</label>
                    <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">{value.player2 ? value.player2.username : 'No Player'}</span>
                    </a>
                </li>
            </ul>
            <div className="flex">
            <button className="bg-blue-500 mx-auto rounded-lg px-2 py-1 flex justify-center">Start Game</button>
            <button onClick={() => setHiddenModal(true)} className="bg-red-500 mx-auto rounded-lg px-2 py-1 flex justify-center">Cancel</button>
            </div>
        
        </div>
    </div>

        
        </>
    )
}




