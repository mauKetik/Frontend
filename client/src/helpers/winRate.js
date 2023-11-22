export const winRate = (gamePlayed, totalWin) => {
    return (gamePlayed && totalWin ? ((totalWin / gamePlayed ) * 100).toFixed(2) + '%' : 0 + '%' + " AKA NOOB")
}