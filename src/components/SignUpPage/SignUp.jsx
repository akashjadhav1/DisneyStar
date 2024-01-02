import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate() 






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

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    try {
      console.log("Attempting registration:", username);
  
      if (username && password && password === confirmPassword) {
        const response = await axios.post("https://disneystarserver.onrender.com/register", {
          username: username,
          password: password,
        });
  
        
  
        if (response.status === 201) {
          navigate('/login');
          showToast("Successfully registered", "success");
        } else {
          showToast("Unexpected error occurred", "error");
        }
      } else {
        showToast("Invalid input", "error");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      showToast("An error occurred. Please try again later.", "error");
    }
  };
  


    // Make an HTTP POST request to your server


  return (
    <div >
      <section className="mt-3">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white "
          >
            <img
              className="w-8 h-8 mr-2"
              src="images/movieLogo3.png"
              alt="logo"
            />
            <p className="text-white">Disney Star</p>
          </div>
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-blue-200 rounded">

                <p className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-blue-500 ">Create and account</p>

              <form className="space-y-4 md:space-y-6 bg-blue-200" action="#">
                <div className="bg-blue-200">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="current-username"
                    onChange={(event)=>setUserName(event.target.value)}
                    className="bg-gray-50 shadow-xl border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 shadow-xl text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    autoComplete="new-password"
                    onChange={(event)=>setConfirmPassword(event.target.value)}
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 shadow-xl border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start ">
                  <div className="flex items-center h-5 ">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300 "
                    >
                      I accept the{" "}
                      <NavLink
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                        href="#"
                      >
                        Terms and Conditions
                      </NavLink>
                    </label>
                  </div>
                </div>



                <button

                  onClick={handleSignUp}
         
                  className="w-full shadow-lg text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

                >
                  Create an account
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="text-blue-500 hover:underline dark:text-primary-500 "
                  >
                    Login here
                  </NavLink>
                </p>
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

export default SignUp;