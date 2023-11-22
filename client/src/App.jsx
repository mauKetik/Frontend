import { RouterProvider } from "react-router-dom"
import { router } from "../router"
import index from './store/index'
import { Provider } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
    <Provider store={index}>
      < RouterProvider router={router} />
      <ToastContainer />
    </Provider>
    </>
  )
}

export default App
