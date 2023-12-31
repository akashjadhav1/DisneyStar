import React, { useContext } from "react";
import { useNavigate, NavLink} from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { userData } from "../App";




function Navbar() {
  const navigate = useNavigate();
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const {handleSearch, setSearchQuery}= useContext(userData)

  
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


  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out")) {
      localStorage.removeItem("userToken");
      navigate("/login");
      showToast("Logged out successfully", "success");
    }
  };



  
 

const handleSearchInputChange = (event) => {
  setSearchQuery(event.target.value);
};

const handleSearchButtonClick = async () => {
  handleSearch()
};

  const handleSearchDrawerOpen = () => {
    setIsSearchDrawerOpen(true);
    setIsUserMenuOpen(false); // Close user menu
  };

  const handleSearchDrawerClose = () => {
    setIsSearchDrawerOpen(false);
  };

  const handleMovieClick = (movieId) => {
    // Navigate to the PageView component with the selected movieId
    navigate(`/preview/${movieId}`);
  };


  const handleUserMenuToggle = () => {
    setIsSearchDrawerOpen(false); // Close search drawer

    // Toggle user menu only if it's closed
    setIsUserMenuOpen((prevIsUserMenuOpen) => !prevIsUserMenuOpen);
  };

  const handleUserMenuClose = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <>
    
    <div className="">
      <nav className="block w-full max-w-screen-xl px-4 py-3 mx-auto text-white shadow-md rounded-xl bg-gradient-to-tr from-blue-gray-900 to-blue-gray-800">
        <div className="flex flex-wrap items-center justify-between text-white gap-y-4">

        <div className="flex"> <img src="/images/movieLogo3.png" alt="logo" className="h-9 w-9" />
          <NavLink
            to="/"
            href="#"
            className="mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            Disney Star
          </NavLink></div>
         
          <div className="flex gap-1 ml-auto md:mr-4">
            

        <div className="relative ml-3">
          <div>
            <button type="button" onClick={handleUserMenuToggle} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-person-circle rounded-full w-8 h-8" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
            </button>
          </div>

         {
          isUserMenuOpen &&(
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
        
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={handleUserMenuClose}>Your Profile</NavLink>
            
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={handleLogOut}>Sign out</NavLink>
          </div>
          )
         }
          
        </div>
          </div>
          <div className="relative flex w-full gap-2 md:w-max">
            <div className="relative h-10 w-full min-w-[288px]">
              <input
                type="search"
                className="peer h-full w-full rounded-[7px] border border-white  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                onChange={handleSearchInputChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Type here...
              </label>
            </div>
            <button
              className="!absolute right-1 top-1 select-none rounded bg-none border py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
           
          </div>
        </div>
      </nav>
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



   
      </>
  );
}

export default Navbar;
