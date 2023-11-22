export const WaitingRoomButton = ({leaveRoomHandle,destroyRoomHandle, inGame, ...props}) => {
    return (
        <>
        {!inGame.player2 ? <button onClick={destroyRoomHandle} {...props}>Destroy</button> : <button onClick={leaveRoomHandle} {...props}>Leave</button>}
        </>
    )
}