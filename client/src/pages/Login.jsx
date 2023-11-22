import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { URL_DATA } from "../CONSTANT";
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage, clearMessage } from '../store/HandleErrorRedux';

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { message, messageType } = useSelector(state => state.error);

  useEffect(() => {
    if (message) {
      if (messageType === 'error') {
        toast.error(message);
      } else if (messageType === 'success') {
        toast.success(message);
      }
      dispatch(clearMessage());
    }
  }, [message, messageType, dispatch]);
  
  const [form, setForm] = useState({ email: "", password: "" });
  function handleInput(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  async function handleLogin(event) {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: "post",
        url: URL_DATA + "/login",
        data: { email: form.email, password: form.password },
      });
      dispatch(setErrorMessage(`Welcome to MauKetik ${data.email}!`));

      localStorage.access_token = data.access_token;
      navigate("/");
    } catch (error) {
      console.log(error.response.statusText);
      dispatch(setErrorMessage(`Error : ${error.response.statusText}`));
    }
  }
  return (
    <>
    <body style={{backgroundImage:'url(https://media.tenor.com/5_I50Sy1Y9cAAAAC/raining-raining-letters.gif)'}}>
      
    
      <div className="flex min-h-screen">
        <div className="flex flex-col w-full max-w-md p-6 space-y-8 bg-white">
          <div className="flex justify-center">
            <img
              src="src/assets/Mauketik.png"
              className="w-40 rounded-lg shadow-xl"
              alt="MauKetik"
            />
          </div>
          <h1 className="text-7xl text-white rounded-md font-bangers py-1 bg-black text-shadow-white text-center">
            MauKetik
          </h1>
          <h1 className="text-2xl font-bold text-center">
            Log in to your account
          </h1>
          <div className="flex flex-col space-y-4">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-400">Do not have an account? <Link className="text-blue-500" to='/register'>Register</Link></span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <input
              onChange={handleInput}
              name="email"
              className="w-full px-4 py-2 border rounded-md"
              type="email"
              placeholder="Email Address"
            />
            <input
              onChange={handleInput}
              name="password"
              className="w-full px-4 py-2 border rounded-md"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2  text-white rounded-md bg-black hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <div className="flex items-center justify-center w-full h-full p-10"></div>
        </div>
      </div>
    </body>
    </>
  );
};
