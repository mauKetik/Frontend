import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { URL_DATA } from "../CONSTANT";

export const Login = () => {
  const navigate = useNavigate();
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
      localStorage.access_token = data.access_token;
      navigate("/");
    } catch (error) {
      swal("Login Failed", error.response.data.message, "error");
    }
  }
  return (
    <>
      <div className="flex min-h-screen bg-blue-500">
        <div className="flex flex-col w-full max-w-md p-6 space-y-8 bg-white">
          <div className="flex justify-center">
            <img
              src="src/assets/Mauketik.png"
              className="w-40 rounded-lg shadow-xl"
              alt="MauKetik"
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            Log in to your account
          </h1>
          <div className="flex flex-col space-y-4">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              {/* <span className="flex-shrink mx-4 text-gray-400">Or with email and password</span> */}
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
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <div className="flex items-center justify-center w-full h-full p-10"></div>
        </div>
      </div>
    </>
  );
};
