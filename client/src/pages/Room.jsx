import { useEffect, useState } from "react"
import { Sidebar } from "../components/SideBar"
import axios from 'axios'

export const Room = () => {
    const [rooms,setRooms] = useState([])
    useEffect(() => {
        const getRooms = async() => {
            try {
                console.log(localStorage.Authorization);
                const {data} = await axios.get('http://localhost:3000/rooms',{
                    headers : {Authorization : `${localStorage.access_token}`}
                })
                setRooms(data)
            } catch (error) {
                console.log(error);
            }
        }
        getRooms()
    }, [])
    console.log(rooms);
    const createRoomHandler = async () => {
        try {
            console.log('aaaa');
            const {data} = await axios.post('http://localhost:3000/create-room',{},{
                headers : {Authorization : `${localStorage.access_token}`}
            })
            setRooms([...rooms, data])
        } catch (error) {
            console.log(error);
        }
    }

    const joinRoomHandler = async (roomId) => {
        try {
            console.log('aaaa');
            const {data} = await axios.patch(`http://localhost:3000/join-room/${roomId}`,roomId,{
                headers : {Authorization : `${localStorage.access_token}`}
            })
            console.log('sukses');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>  
    < Sidebar >
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-white dark:bg-gray-800 rounded-lg w-full">

<button onClick={createRoomHandler} class="bg-blue-400 px-4 py-1 rounded-lg text-lg font-bold text-gray-900 dark:text-white mb-2">Create Room</button>
<div className="bg-gray-700 overflow-y-scroll">
    <table className="w-full text-center ">
        
        <tr className="bg-gray-500">
            <th>ID</th>
            <th>Room</th>
            <th>Action</th>
        </tr>
        {!rooms ? <h1 className="text-center text-4xl py-4">There's no room available</h1> : 
        rooms.map(val => {
            return (
                <>
        <tr className="bg-gray-700 ">
            <td className="py-4">{val.roomId}</td>
            <td>{val.player1?.username}'s Room</td>
            <td><button onClick={() => joinRoomHandler(val.roomId)} className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>   
                </>
            )
        })
    }
   
    </table>
</div>
<p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
<p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
</div>
    </Sidebar>
        </>
    )
}


