import { Sidebar } from "../components/SideBar"

export const Room = () => {
    return (
        <>  
    < Sidebar >
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-white dark:bg-gray-800 rounded-lg w-full">

<button class="bg-blue-400 px-4 py-1 rounded-lg text-lg font-bold text-gray-900 dark:text-white mb-2">Create Room</button>
<div className="bg-red-200">
    <table className="w-full text-center">
        
        <tr className="bg-gray-500">
            <th>ID</th>
            <th>Room</th>
            <th>Action</th>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
        <tr className="bg-gray-700">
            <td className="py-4">100</td>
            <td>$name's Room</td>
            <td><button className="bg-blue-400 px-6 rounded-lg py-1">Join</button></td>
        </tr>
    </table>
</div>
<p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
<p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
</div>
    </Sidebar>
        </>
    )
}


