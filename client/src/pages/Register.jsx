import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { URL_DATA } from "../CONSTANT";
import Mauketik from "../assets/Mauketik.png";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInput(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  async function handleRegister(event) {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: "post",
        url: URL_DATA + "/register",
        data: {
          email: form.email,
          password: form.password,
          username: form.username,
        },
      });
      swal("Register Success", "Success To Register Account!", "success");
      navigate("/login");
    } catch (error) {
      swal("Register Failed", error.response.data.message, "error");
    }
  }
  return (
    <>
      <body
        style={{
          backgroundImage:
            "url(https://media.tenor.com/5_I50Sy1Y9cAAAAC/raining-raining-letters.gif)",
        }}
      >
        <div className="flex min-h-screen">
          <div className="flex flex-col w-full max-w-md p-6 space-y-8 bg-white">
            <div className="flex justify-center">
              <img
                src={Mauketik}
                className="w-40 rounded-lg shadow-xl"
                alt="MauKetik"
              />
            </div>
            <h1 className="text-7xl text-white rounded-md font-bangers py-1 bg-black text-shadow-white text-center">
              MauKetik
            </h1>
            <h1 className="text-2xl font-bold text-center">
              Register to your account
            </h1>
            <div className="flex flex-col space-y-4">
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>

                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <input
                onChange={handleInput}
                name="username"
                className="w-full px-4 py-2 border rounded-md"
                type="email"
                placeholder="Username"
              />
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
                onClick={handleRegister}
                className="w-full px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-md hover:bg-blue-700"
              >
                Register
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
