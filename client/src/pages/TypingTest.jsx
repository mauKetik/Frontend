import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import io from 'socket.io-client'
<<<<<<< HEAD
import { URL_DATA } from "../CONSTANT"
=======
import { URL_DATA } from "../CONSTANT";
>>>>>>> d34dfaf6aae4a6f0b35494864128b361a8c8d075

const socket = io((URL_DATA))

export const TypingTest = () => {
    const [typing, setTyping] = useState('')
    const [chatMessages, setChatMessages] = useState([])


    useEffect(() => {
        socket.on('typingValue', (typingRes) => {
            // setChatMessages(prevMessage => [...prevMessage,typing])
            // console.log(typing)
            setTyping(typingRes)
        })
        // kalau mau ngebroadcast pake .io, bukan pake .socket
        return () => {
            socket.off('typingValue')
        }
        
    },[socket])

    const typingValue = (e) => {
        try {
            const {value} = e.target

            setTyping(value)
            socket.emit('typingValue', value)
        } catch (error) {
            console.log(error);
        }
    }

   
    return (
    <>

    < Card src={'https://cdn-icons-png.flaticon.com/512/3593/3593684.png'}>
        <label htmlFor="" className="block py-2">Chat us</label>
        <form>
            <input 
            defaultValue={typing}
            name="typing"
            type="text"
            className=""
            onChange={typingValue}/>
            <button type="submit" className="bg-blue-200 ml-4 rounded-lg px-4">Chat</button>
        </form>
     </ Card>
        <div className="bg-red-500">
    {typing}
        </div>
        {
            chatMessages.map(cht => {
                return <h1>{cht}</h1>
            })
        }
    </>
    )
}