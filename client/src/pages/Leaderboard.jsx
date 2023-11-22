import { useEffect, useState } from "react";
import { Sidebar } from "../components/SideBar";
import ListLeaderboard from "./ListLeaderboard";
import axios from "axios"

export const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUserData()
    },[])

    async function getUserData(){
        try {
            const { data } = await axios({
                method : "get",
                url : "http://localhost:3000/leaderboard",
                headers : {
                    "Authorization" : "Bearer " + localStorage.access_token
                }
            })
            setUsers(data)
            // console.log(data, "<<");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <Sidebar>
  <div className="p-6 bg-blue-50 border-4 shadow-xl border-blue-300 text-gray-500 dark:text-gray-400 dark:bg-blue-900 rounded-lg w-full">
    <div className="mb-4 text-5xl bg-gradient-to-b text-transparent bg-clip-text from-blue-500 to-cyan-500 font-bold text-center">LEADERBOARD</div>
    
      {users && users.map((user, i) => (
        <ListLeaderboard key={user.id} user={user} i={i} />
      ))}
    </div>
  
</Sidebar>

      
      
    </>
  );
};

