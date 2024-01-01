
import {
 
  Routes,
  Route,

} from "react-router-dom";
import SignupPage from './components/SignUpPage/SignUp';
import LoginPage from './components/Login/Login';
import { useState,createContext, useEffect,} from "react";
import HomePage from "./components/HomePage";


import PageView from "./components/PageView";

import Favourite from "./components/Favourite";
import Carousel from "./components/Carousel";

import { FavoritesProvider } from "./components/FavouritesContext";


export const userData = createContext();


function App() {
 


const [data,setData] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);



//fetch Api data
const getLoginData =async ()=>{
    try {
      const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=e6e995c1efafd0722f2c418185798878`);
      const actualData =await res.json();
      setData(actualData.results);
    } catch (error) {
      
    }
}

//use useEffect here
useEffect(()=>{
  getLoginData()
},[]);


// console.log(data)



const handleSearch = async () => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=e6e995c1efafd0722f2c418185798878&query=${searchQuery}`;
      const response = await fetch(apiUrl);
      const searchData = await response.json();

      // Update search results state
      setSearchResults(searchData.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };


  return (
    <div className="">
   
   
   
    <userData.Provider value={{ data, searchResults, handleSearch,setSearchQuery,}}>
    
    <FavoritesProvider>
    

    <Routes>
          
          <Route exact path="/" element={<HomePage/>} />
           <Route path="/login" element={<LoginPage/>} />
           <Route path="/register" element={<SignupPage/>} />
           <Route path="/preview/:id" element={<PageView/>}/>
           <Route path="/favourites" element={<Favourite/>} />
           <Route path="/carousel" element={<Carousel/>} />
           
           
           
      </Routes>
     
      </FavoritesProvider>
      
    </userData.Provider>
        

    
     
   
  </div>
  );
}

export default App;