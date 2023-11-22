import { useEffect, useState } from "react";
import { Sidebar } from "../components/SideBar";
import "./Leaderboard.css"
import ListLeaderboard from "./ListLeaderboard";
import axios from "axios"

export const Leaderboard = () => {
    const [user, setUser] = useState([]);

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
            setUser(data)
            // console.log(data, "<<");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <Sidebar>
        <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Leaderboard
          </h3>
          <p class="mb-2">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p>
            The tab JavaScript swaps classes to control the content visibility
            and styling.
          </p>
          <div id="table">
        <table>
            <tr id="head">
                <th>Rank</th>
                <th>Username</th>
                <th>Total Game</th>
                <th>Total Win</th>
                <th>Win Rate</th>
            </tr>
            {user && user.map((users, i) =>{
               return <ListLeaderboard users={users} i={i} />
            })}
        </table>

      </div>
        </div>
      </Sidebar>
      
      
    </>
  );
};
