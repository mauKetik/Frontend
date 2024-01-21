import { Sidebar } from "../components/SideBar"
import React, { useEffect, useState } from 'react';


import axios from "axios";
import { winRate } from "../helpers/winRate";
import { URL_DATA } from "../CONSTANT";


export const Profile = () => {
    const [user,setUser] = useState({})

    useEffect(() =>{
        getUserProfile()
    }, [])
    async function getUserProfile(){
        try {
            const {data} = await axios({
                method : "get",
                url : `${URL_DATA}/my-profile`,
                headers : {
                    "Authorization" : "Bearer " + localStorage.access_token
                }
            })
            setUser(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>   
       < Sidebar >
       <div className="shadow-xl p-6 bg-gray-50 text-medium text-gray-500 dark:text-white  dark:bg-gray-800 rounded-lg w-full" style={{backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cebd17f1-b283-45e5-8600-6ec3edc558fd/dee2aqv-222532a7-8676-4788-b8e3-08d4f5be55e2.png/v1/fill/w_1280,h_640,q_80,strp/profile_banner_by_darkfigure4_dee2aqv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvY2ViZDE3ZjEtYjI4My00NWU1LTg2MDAtNmVjM2VkYzU1OGZkXC9kZWUyYXF2LTIyMjUzMmE3LTg2NzYtNDc4OC1iOGUzLTA4ZDRmNWJlNTVlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sdy7FtZ92V4tHXX-hTf0PupZmkD7CQoG-BkmOY0_mQg)'}} >

  <div className="text-center">
  
    {/* <!-- Avatar and Info --> */}
    <div className="flex items-center justify-center space-x-6 my-8">
   
      <div className="flex items-center space-x-2 bg-black px-14 py-4 rounded-lg shadow-lg">
        <img className="h-32 w-32 rounded-full border-4 border-yellow-300" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEBUTEBMWEBIWFhIVFhcWFhUXFRUYGxYZFhUdFRsaICgsHxonGxYVIj0iJSkrLi4uGR8zODUtOCgtLisBCgoKDg0OGxAQGy8lICUyKy0vMDcwLS01LS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAgMHAf/EAEcQAAEDAgMEBgQKCAQHAAAAAAEAAgMEEQUSIQYTMUEiUWFxgZEHFjKxFCNCVGKSocHR0xVDUlOClNLwJDNy8Rc0ZIOTorL/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADYRAAIBAgQDBQcDBAMBAAAAAAABAgMRBAUhMRJBURMiYYGhFHGRscHR8DJC4RUjUvFyotIG/9oADAMBAAIRAxEAPwCzREXCHbhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEUujp4wySaofuqeFuaR/Psa36RNtO3tCi4XjuF4+4RwyyUkxNmNqAA15vYAOBIzHSwvfXgVMo4CvVp9pFafm3L1RDq4+jSnwSevy958Rd9ZSPonlkgyuH2jrHWF0KJKLi7MlxkpK62CIuUbDKQ1oJJNgBxJXh63bVnFF34tXUOzXRrZnPntfcQWc9vVvDwb4keK5sMGK0zauic50JOR7H23kT+p9u8eYNzdTZ5diIU+0ktPX4EKGYUJVOzT19PiRURFCJoREQBERAEREAREQBERAEREAREQBERAEREAREQED0kSmGgo6Zpt8JmfI+3ygwhjQewGRp7wFUYjgcVZHkADXNADXDiNNM3WFa+k5v+Gwyf5Mb5oz3lzH+6IrG1mJOoK6V4N2lzQ4dbco+0DVdPwTlTp9m7WjdeOxQ0qtODquqr3lZ+C1dz0DYjF37RU8lHUnNWUoLonH2pIxoWk8yNBfqc3tJsI8Ink4QyH+Ej3rz/ABWplwmshqaR+7le0tDrAi56Ot78WuHkFZvkxeq1kxGRp6mPc0eTQ0LZ/TFj7VUmnbW1vr5karmSy2ToyatfS99vI1zsGqG8YZPqk+5RscxQ7IURnA/xc5dFAHDVg+XIQeocO0t6ysy0YrBqzEpSfpPkI+0n3KrkqqrGq+NtdLv3wNOtm2to4cANcxbrbkiydYJ9tK+m17b+RjDN/b7UINXdr2vt5kvCMIEPxs/xkzzmcX9KxPfxcetXHox/w9fWUX6uaFzwOQcwjLYddpD9UdSxmOYm6sqGtaehG9oHa4OFz56Laejgb3Gamb5ENPJc9vQaP/l/klGM+K9R/qW3Tp6EnFzpdnwUlbhkkn10bfqixGqINAi5NHQhERengREQBERAEREAREQBERAEREAREQBERAFLw2gdXvsCGtAzPefZY3mSo8URmcGtF3EgAdZPBVu32KOu3CaN2psauQfKNr5D9EAgkf6R1g2GXYJ4mprsvn0+vgiBmGNWGp3W79F1IG2O0A2jb8Aw6MPpon53Su4yPAIzNJ9lpuR1uvyHHB1cm9ILtHgBjr8bt6IPkAPBaquq24GxtPSjNM62vEgnmetx6uAXZhWANhO8n+NlOpvqAfvPauoxbo4SMY/uXJfLy5nN5dHEY6UpJWi+b5+P2XzKZkVTirIg2PK2IdF50vw1148BwCvm7L1lRrJWkdjHPI97fcrVW1A/Ozu0/BUNbMa8I/2u6rnQVcrou06nee2plTslVR6srXX6iZbePSPuVQ+lq8HmdK5onJBa5zTfq10seQ5L0WZ+7aT1BUqxo5liKkWqj4o9GKWV0FLjprha2a/k82pZdy8POpac3e4ai/jZa3ZDG5tj3Oknh31NVNaJv3lulax0sek45Tob8QVIxbA48RBIGSTk4c/9Q5+9RMLxEhxpK0XJ6LSeDgeAJ59h+9X+BqUcS3Fuz2/PB+BQ5nRxODipRXFFO7tf06NeJv62lYWMnpn76nlF2PHL6Luojt6tdVBVDstivqjVGmqDmw+pNul+rdwDx1EaA9ljyWoxOiOHyujdrbgf2mngVzuaZe8NO6Vk/R/Z8i8yvMFiYWbu+vVfdcyKiIqotQiIgCIiAIiIAiIgCIiAIiIAiIgCIiHqJ9LWNwSnqK14B3LLRg8HSu6LB5kea88wqQ4bTSVcxzzSkm7uLiTcX7zdxWm9JUhhw+ipm6OqJXyu7m2ay/8A5Gn+FZ7ajDpalsTImjdMBvcgAWFhe/IC/mV3OT0HRw3HFa2v5y+yODzquq2IVOTtFv8A6x5ebGzdAQPhEuskmoJ5A/efdZcdp8QmoMhjIaw3ubAnN49n3qpwehkxqTNI9xjYRrc6kcA3q+5a2v3TmZZi3I4hvSNrnlbtVRWfDiOKfefNdPxanU4ZOeF4afcS2d97b38yFJNUYPTU1RWZCypzFgbcStYACHOHAg3Gg14ddlosJlEl7G4IDgRwI7PMLK4ps/JXll6hzmsaI2CQZsjBwa0gjTwV7s9AMNYGOfcNaekbNHG/Wo+PVGUL0t+hlhlioqUa+q5MtMRdZneR+Kz9BJLj876aiMe9ZG995CbPLSAWstz14nTRXGJSNqGWY8G+YXaQbadiyOHbOS4dK2WKpMbmG7XMbZ40tpr1EjnxWGXxoxTdX4GWIeIdNKgt73eh04FilTVT5Hm7RmzgtAy205c76K1x7DBiUZy/5jdWnn3Hv96kUEUVMXtjIc++aTUF5cdbvWf2lw59K81ETiASM1iQWngCCOXDuUpOM664e7003/2YSjOlhWqnf667e7/i/wA0JdO/1io3MdrNH53A6JPeLjzWx2YxA49hLHvN56RwgkOtzH+qJvxNsov1hyxGy1JPFNvTZ0cjHEuBFib3GnHNe/LrWm9HZ+DYpV0vBlRA8gfSFntt3B8n9hX2PoOvhU5Kzat9Ys5DL68aGLlGDul3l4cmiyRfSLL4vn59ACIi9AREQBERAEREAREQBERAERSa6WiwVsfw+pMD5W7xjGRSSHLyLsjTbxtzW6hh6ld2pq5pr4inRSc3uRkXD1jwX59L/Kz/ANCHaPBfn0v8tP8A0KV/SsV/j6ojLNMN1fwZC9JHSrsNZybBG4eLz/QF1YpSmthfG12UuFr++/uUDbzaSjxOqopKWUyshY1khMcjCAHAjR7RfQu4L76z0v7w/Uk/Bd5l8oRpOM3bz8DgM0hUlWjOmm/LxuVkGHV2Gtyxujc0XNhY9p9poXRVzuxugL3Wzxvubaaf7O+xXXrPS/vD9R/4LKvEEkz/AI8sgc7NYNkuedrZbaXOpUPF4GhxRlRavfX86MscBmmJ4ZwxKfDay0f8mvwmtFdC1442s4dThxH99YVLUYqzD6lz6mljrWPawxsnL2iMc8oGlyeNweA8ax1XHhsuamdvoiWuLHhwsRw4jj1Ef7z63EKbFISHucJW53NzDW/HLdotbgPBVKoPD1m0rrw5F+8XHGYZRb4Zb66XsfazHIsVfGykw+Cgkzt+Mhc/NbmCLNBFuNweC0b6pscZkddrQCTcWPksngVVT4fGZHuO+OYAAXLR2aWB7So9TiLcTkAkduoujmdYl78vDNlGp49gulWjLEVVG1kuZ5h8VDB0HK929bb2/nwLDCJzBFUVR4uJDQeu/uuR5Lsijr8VjvmY2N452FwfAlVNbHTg2gqCI3EZmubJp26N6S1EW0dJC0Na8gAADoS8ALDkrTDYGj2kpVmuVvIo8ZmuIVKEcOpc76Pe+rfvv8yTgGHOwyLI9wccxOl7DhoLrngTt1tDRkcw8HtvDMP77lG9Z6X94fqP/BRMIx+mgxmnqpZC2niD7uyPcbmKRos0C/tPHLkrLFyp9ioQe1vEp8DCs8S51ItXT8DaVrckrx1PeP8A2K6Ul2mwaVxca2W5JP8Ay0/M3/YXD1jwX59L/Kz/ANC4KWV4lybsvij6DHM8OopXfwZzRSMLrMNxyUQUlW587g4sa+CVgdYXIu5oF7AnjyXQ9pYSDoQSD3hRK+Fq0LdorXJVDFUq9+B7HxERRyQEREAREQBERAEREAUXb7Dv01hjJ2i81Ecr+swO7PokNPcHKUrjZqxfIJLGAwyb6/s7u2t/761Py2q6eIS5PQgZlSVSg2+Wpidn8JgxzdBkUYMlhq0WB+VfxBVzjuxDMGY1z2QuDiW9FvDS/Mdiy2w7izOYy4RCUbsnR3Hn22y+N17ltBDTTxs+FODW3u27i3pZezsurdUL9pG+qeju7a9SLLFOPZTcVaS1XCm3bppzPPJtgGQxxyFsJEjo2gWNxn4X0U7/AIXD/p/qn8FqtpYWzUsLGGzXS07WkHkTYEHu5qZitHLO6HcuEbY35nAl3TA0A04i1+PYt/s8bvRvbm/PmRfbJuMXeKvf9q5WtyPLavZFtNUCDcxueS3LZos6+oIvy4+RV2z0XZhqIB2ZT+C1+L0w+G0kg9rNKw9o3bnD7/NZzbyqfDUgNe5o3bTYOIHF3UtM6caSlKV3Z6ataWXiSKdedeUIU+FNxbb4U9U2voUU/ox/SccjYzFE5j3MDsp4gA8hwOZVGzuwVVjlRMass+KDYiSdHuHRFiwC9g3idTcErfejp7pHTXJdpEdSTqS6579B5LQUJp372CJ/SJkdIAekC42cb9h0W6haVJWejvzd37uZGxblCtK6u422St1ba2e55LVejuaaNk+HCN7o5SMub2srtHfGaEXA0PEHwVnh3otlgjfLVPilldmkffM6x1cQDbU3vqrTDo3YdiTYGvdkbLa1yARx1A0U/wBIU74pYw1zmgxm4BIB6XOy19quwfEno7b7v3m/2eXtceBrvK67vL3eRU0/o0bOxrwIAHNa4XaeYv1Lj/w4bvd3aC+QvvlNrZsvV2rR+juV0jJQ5xdYsAuSbCx0F+CocIrjHiDS97iN49pu4nQkgDuuQsP7XDCWvef+TNidfjqxvHuK/wCldL9PIq67YuOiqGQOZEXPy2IboLm2uikVHo+bDPHEGQuLw51w2waG2ve47QtfjtE+XEaVwGnuyOzG/gQrKZhnrmFrgN1E7OLXvvHdEDq9km/cs1h1xSWv6klq9uf1NUsY1CDSjrFt91b3aXLroYx/ovYAcu5c4cslvtWTmwmCDNniY3LfN0RpbivWsMdTGqnMMhdM6+cG5aMpsbaDn2ryf0gxSUAnZfMc9nOGmjjcm3bcDxWutS/TwPd23bN2FxDtPtEnaPEu6k/9dPDUkeimjax1ViTmBrIwYoG8Bndq6w7G5B/E5WhObU6nmpVLGylwqiZTnNC6PeOda2aU6vzDkQS7T8FEVdm1W9VU+UV8/wARtyunam6j3k/z6/EIiKrLMIiIAiIgCIiAIiIAujbWu/QuFbtv+dWuyW5iFurz4ktb/Gu8KRjOF0O1DYTVvnhkhj3Q3WXK5uljYtNvs9yssrlShWcqjtZaX6ldmcakqSjBXu9bfnUzeEwNw+JjLjogE6jU8XfatTtJtKzGo2MDMmV17lwN9Lfeqf1Awf5xVeTPy09QMH+cVXkz8tWNqNpLtl3t9vuR+3qXg+wfd23/APJoKja1k0MMeS27dC4nONcluHfZRNotpP0s9jmXiyggjPxuQeXcqr1Awf5xVeUf5aeoGD/OKryZ+Ws5ypzVpVl6cvM105uElKOHel+b57/tNFi22Qq3ROjZkdE8v1cCDdpaRp2EqWduopAM9OHHvafK4WQl9HWGVALYKuaOUjoGVrDHf6VmjTxCxGMbLTbNyZa6F4jOjZYSDG7ta4i3gbHsUikpVG5Qqp9dE/qRq1WlBKM6DVtu80/LTXwPVcK2pjoJ55d3cSlpDQWjLa/4qPhG0LMPqZJi3MJM/RzC4u7Nx8F53R4JQ1vsTOv1Eta7yLVN9TYD8uTzb+ClRyjEOzjNaarbn5kOef4SHEpUmrpJ6vZeXgbB2NNNb8JtpnD8uYX4Wtdc9pcdbjT2uDcmVpbYuBvrdY31Ng/ak82/gotVs7R0g+Mmc3suy/kBdeSyWuotOas3d7b/ABMof/SYVzjKNNtpWW+3wPVaHbaKkja0Q6hrQSHNF7C1+CpNosajxZ7XMYIsoI4jU3vfReZU2DfpiXdYfFNUPvqXZQ0d+gDR2uIW4o/RnR0TAMQqX786lkAaWM7CXNNz5feouIoNQtUqq3uXzuTMJi4KfHSovi1/c7+Olja0+3zWMaHx5nAC5D2gE8zwVTQbVmlqZZnAPEvtNzWIA9mx7Bp2qo9QMH+cVXkz8tPUDB/nFV5M/LWmVSDs+3Wnu+5tj3U0sO9dHrLrfoatu2VLCXPjp7SO4m8YJ59IjVY/GKoYu+R0lvjL3AI0BFtPCy7fUDB/nFV5M/LT1Awf5xVeTPy1jUlTqW4qy09y+pnRqSotuNB66auT0+Bw9GVSamGpwyQgvjJng1462kA7Llp/7h6lNXdgGz2G7NztqYJaiWRgeGtdlDSXDLrZo5ErrkfvHEniST5m6gZrOlOUZQkm9nb0uSMsjVgpRlFqO6v6/TU4oiKpLQIiIAiIgCIiAIiIAiIgCIiAIiIArGjxiWmbkNpYjoY5BmYR1a8lXIs6dSdOXFB2ZhUpwqLhmroV2zuEYtcvp5KN54ugf0PBjrtHg1QT6PqX9RikkY6nxuHuLVORWVPOMRHez9Pk0V88ooS2uvX53IDfR9B+txZzx1Njff7XFSaTZDB8P1cKiucDf4x27ZftDA247DddyL2ecV5bJL4v5s8p5RQjzfovkiyfjDo491TsZSRD5ETQ3zI+6yruK+Iq2rWqVXxVJNv88iwpUadJWgrBERazYEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=" alt="Profile avatar"  />
        <div className="">
          <p className="font-semibold font-luckiest-guy text-2xl tracking-wider text-shadow-red">{user.username}</p>
          <p className="font-luckiest-guy text-red-500">Member since: {new Date(user.createdAt).toLocaleDateString('ID')}</p>
          <p className="font-luckiest-guy">ID: {user.id}</p>
        </div>
      </div>
    </div>
 
    <div className="grid grid-cols-3 divide-x divide-gray-400 text-sm bg-black rounded-lg py-2 border-orange-200 border">
      <div className="px-4">
        <p className="font-semibold font-luckiest-guy text-xl tracking-wider ">Total Win</p>
        <p className="text-2xl">{user.win}</p>
      </div>
      <div className="px-4">
        <p className="font-semibold font-luckiest-guy text-xl tracking-wider ">Total Games</p>
        <p className="text-2xl">{user.totalGame}</p>
      </div>
      <div className="px-4">
        <p className="font-semibold font-luckiest-guy text-xl tracking-wider ">Win Rate</p>
        <p className="text-2xl">{winRate(user.totalGame, user.win)}</p>
      </div>
    </div>
  
  </div>
</div>

       
  
    

    </Sidebar>
        </>
    )
}