import React, {  useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";




function Login() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

 
  const navigate = useNavigate();

  const showToast = (msg, type) => {
    toast[type](msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: type === "error" ? "dark" : "light",
    });
  };



  const handleLogin = async (e) => {
    e.preventDefault()
  const user = {
    username: username,
    password: password,
  };

  try {
    const response = await axios.post("https://disneystarserver.onrender.com/login", user);
   
    
    if (response.status === 200) {
      const token = response.data.result.token;
      
      

      
      localStorage.setItem("userToken",token);
      showToast("Login successfull","success");

      setUserName("");
      setPassword("");
      navigate('/');
      
    } else {
      console.log(response.status, "error for login");
      showToast("Login error","error")
    }
  } catch (error) {
    console.error("Error:", error);
    showToast("Invalid username or password","error");
  }
};


  

  return (
    <div>
    
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold">
            <img
              className="w-8 h-8 mr-2"
              src="images/movieLogo3.png"
              alt="logo"
            />
            <p className="text-white">Disney Star</p>
          </div>
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-blue-200 rounded">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white ">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6 ">
                <div className="bg-blue-200">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-blue-900 "
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="current-username"
                    onChange={(event) => setUserName(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-blue-900 dark:text-white "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <div className="flex">
                <p className=" text-center font-light text-gray-500 dark:text-gray-400 ">
                  Don't have an account?{" "}
                 
                </p><NavLink
                    to="/register"
                    className="text-blue-500 hover:underline mx-2 dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </div>
                
                 
        
              </form>

              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
