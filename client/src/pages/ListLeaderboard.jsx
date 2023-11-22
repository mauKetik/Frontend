import { winRate } from "../helpers/winRate";

export default function ListLeaderboard({user, i}){
    return (
        <>
  {/* Header Row */}
  <div className="bg-blue-800 shadow-black shadow-md my-4 p-4 rounded-lg hover:scale-105">
    <div className="grid grid-cols-5 text-xl tracking-wider font-luckiest-guy text-center mx-auto font-bold text-white py-2 px-3">
        <div>Rank</div>
        <div>Player</div>
        <div>Games Played</div>
        <div>Wins</div>
        <div>Win Rate</div>
    </div>

    {/* Leaderboard Entries */}

            <div className="grid grid-cols-5 gap-4 items-center text-center font-bangers text-xl tracking-wider">
                <div className="flex items-center space-x-2 mx-auto text-center ">
                    
                    <img src={`/src/assets/medal-${i+1}.png`} alt={`Rank ${i+1}`} className={`h-8 w-8 ${i < 3 ? 'visible' : 'hidden'}`} />
                    <span className="text-white font-medium">{i + 1}</span>
                </div>
                <span className="text-white font-medium">{user.username}</span>
                <span className="text-white font-medium">{user.totalGame}</span>
                <span className="text-white font-medium">{user.win}</span>
                <span className="text-white font-medium">{winRate(user.totalGame, user.win)}</span>
            </div>

    </div>
        </>
    )
}
<>


</>
