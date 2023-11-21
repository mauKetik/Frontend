export const Login = () => {
    return (
        <>
  <div className="flex min-h-screen bg-blue-500">
  
  <div className="flex flex-col w-full max-w-md p-6 space-y-8 bg-white">
    <div className="flex justify-center">
      <img src="src/assets/Mauketik.png" className="w-40 rounded-lg shadow-xl" alt="MauKetik" />
    </div>
    <h1 className="text-2xl font-bold text-center">Log in to your account</h1>
    <div className="flex flex-col space-y-4">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        {/* <span className="flex-shrink mx-4 text-gray-400">Or with email and password</span> */}
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <input className="w-full px-4 py-2 border rounded-md" type="email" placeholder="Email Address" />
      <input className="w-full px-4 py-2 border rounded-md" type="email" placeholder="Password" />
      <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Next
      </button>
    </div>
  </div>
  
  
  <div className="hidden lg:block lg:w-1/2">
    <div className="flex items-center justify-center w-full h-full p-10">
      
    </div>
  </div>
</div>

        </>
    )
}