import { useEffect, useState } from "react"
import { Sidebar } from "../components/SideBar"
import axios from 'axios'
import { WaitingRoom } from "./WaitingRoom"
import ButtonSFX from '../sounds/button_shock_sfx.mp3'
import useSound from "use-sound"
import { URL_DATA } from "../CONSTANT";
import io from 'socket.io-client'


const socket = io((URL_DATA))

export const Room = () => {
    const [rooms,setRooms] = useState([])
    const [play] = useSound(ButtonSFX)
    const [hiddenModal, setHiddenModal] = useState(true)
    const [selectedRoomID,  setSelectedRoomID] = useState(null)

    useEffect(() => {
        socket.on('createRoom', (createdRoom) => {
            setRooms(createdRoom)
        })
        // kalau mau ngebroadcast pake .io, bukan pake .socket
        return () => {
            socket.off('createRoom')
        }
        
    },[socket])
   
    
    useEffect(() => {
        const getRooms = async() => {
            try {
                const {data} = await axios.get(`${URL_DATA}/rooms`,{
                    headers : {Authorization : `Bearer ${localStorage.access_token}`}
                })
                setRooms(data)
            } catch (error) {
                console.log(error);
            }
        }
        getRooms()
    }, [])

    useEffect(() => {
        socket.on('deleteRoom', (deletedRoom) => {
            setRooms(deletedRoom)
        })
        // kalau mau ngebroadcast pake .io, bukan pake .socket
        return () => {
            socket.off('deleteRoom')
        }
        
    },[socket])

   

    const destroyRoomHandle = async(roomId) => {
        play()
        await axios.delete(`${URL_DATA}/room/${roomId}`,{
                headers : {Authorization : `Bearer ${localStorage.access_token}`}
            })
            let newRoom = rooms.filter(val => val.roomId !== roomId)
            setRooms(newRoom) 
            socket.emit('deleteRoom', newRoom)
            setHiddenModal(true)
    }

    const createRoomHandler = async () => {
        try {
            play()
            const {data} = await axios.post(`${URL_DATA}/create-room`,{},{
                headers : {Authorization : `Bearer ${localStorage.access_token}`}
            })
            setSelectedRoomID(data.roomId)
            socket.emit('createRoom', [...rooms, data])
            setHiddenModal(false)
            setRooms([...rooms, data])
        } catch (error) {
            console.log(error);
        }
    }

    const joinRoomHandler = async (roomId) => {
        try {
            play()
            const {data} = await axios.patch(`${URL_DATA}/join-room/${roomId}`,roomId,{
                headers : {Authorization : `Bearer ${localStorage.access_token}`}
            })
            setSelectedRoomID(roomId)
            
            setHiddenModal(false)
        } catch (error) {
            console.log(error);
        }
    }

    
    
    return (
        <>  
    < Sidebar >
    <div className="p-6 bg-gray-500 text-medium text-white dark:text-white dark:bg-gray-800 rounded-lg w-full">
{!hiddenModal && <WaitingRoom destroyRoomHandle={() => destroyRoomHandle(selectedRoomID)} roomId={selectedRoomID} setHiddenModal={setHiddenModal}/>}
<button onClick={createRoomHandler} className="active:scale-90 hover:scale-110 bg-blue-900 px-4 py-1 rounded-lg text-lg font-bold text-white dark:text-white mb-2">Create Room</button>
<div className="relative overflow-x-auto shadow-blue-500 sm:rounded-lg shadow-md">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 ">
            {rooms.length >= 1 &&
            <tr className="font-luckiest-guy text-2xl text-white">
                <th scope="col" className="px-6 py-3 bg-gray-700 dark:bg-blue-900">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-900">
                    Room
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-blue-900">
                    Action
                </th>
                
            </tr> }
        </thead>
        <tbody>
        {rooms.length < 1 ? <h1 className="text-center text-4xl py-4 animate-pulse">There's no room available</h1> : 
        rooms.map(val => {
            return (
                <>
            <tr className="border-b border-gray-200 text-lg font-bangers tracking-widest dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-900">
                {val.roomId}
                </th>
                <td className="px-6 py-4 bg-gray-900">
                {val.player1?.username}'s Room
                </td>
                <td className="px-6 py-4 dark:bg-gray-900">
                <button onClick={() => joinRoomHandler(val.roomId)} className="active:scale-95 hover:scale-110 text-white bg-blue-800 px-6 rounded-lg py-1">Join Game</button>
                </td>
                
            </tr>
            </>
            )
        })
    }  
        </tbody>
    </table>
</div>
<p className="mb-2 pt-4">The tab mechanism in this game employs React.js to controlling the visibility and styling of the content. </p>
<p>Each tab is designed to present specific information relevant to different aspects of the game, such as Leaderboards, Rooms, or </p> 
</div>
    </Sidebar>
        </>
    )
}







