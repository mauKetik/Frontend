export default function ListLeaderboard({users, i}){
    return (
        <>
        <tr>
            <td>{i+1}</td>
            <td>{users.username}</td>
            <td>{users.totalGame}</td>
            <td>{users.win}</td>
            <td>70%</td>
        </tr>
        </>
    )
}