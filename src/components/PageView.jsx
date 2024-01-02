import React, { useContext } from "react";
import { userData } from "../App";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function PageView() {
  // use the hook useContext and get the data
  const {data,searchResults} = useContext(userData);
  
  const { id } = useParams();
  const movieId = parseInt(id);

  const Img = "https://image.tmdb.org/t/p/w500";
  return (
    <>
    
    <Navbar/>
      
      <div className="container mx-auto">
      {/* map the data */}
        {data.map((items, index) =>
          items.id === movieId ? (
            <div key={index} className="md:flex p-6">
              <img
                className="border rounded md:w-72 md:h-96 mt-6 md:mr-8"
                src={`${Img}${items.backdrop_path}`}
                alt={items.title}
              />
              <div className="mt-10 md:mt-0">
                <p className="text-3xl md:text-5xl">
                  {items.original_title ? items.original_title : items.name}
                </p>
                <div className="flex mt-2 md:mt-7">
                  <img
                    className="w-7 h-7 md:w-9 h-9 mt-1"
                    src="/images/imdb_logo.png"
                    alt="imdb_logo"
                  />
                  <p className="mx-2 text-4xl">
                    {items.vote_average.toFixed(1)}
                  </p>
                </div>
                <div className=" grid gap-4 grid-cols-2 mt-5">
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <p className="font-light">Language</p>
                    <p className="font-semibold">
                      {items.original_language === "en"
                        ? "English"
                        : items.original_language}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 mt-3 md:mt-0">
                    <p className="font-light">Release Date</p>
                    <p className="font-semibold">
                      {items.release_date
                        ? items.release_date
                        : items.first_air_date}
                    </p>
                  </div>
                  <div className="w-full mt-3 md:mt-0">
                    <p className="font-light">Adult</p>
                    <p className="font-semibold">
                      {items.adult === false ? "False" : "True"}
                    </p>
                  </div>
                  <div className="w-full mt-3 md:mt-0">
                    <p className="font-light">Media Type</p>
                    <p className="font-semibold">
                      {items.media_type.charAt(0).toUpperCase() +
                        items.media_type.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-bold text-lg">Overview:</p>
                  <p className="text-sm md:text-base">{items.overview}</p>
                </div>
                <div className="mt-8">
                  <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5">
                    Website
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>


      <div className="container mx-auto">
        {searchResults.map((items, index) =>
          items.id === movieId ? (
            <div key={index} className="md:flex p-6">
              <img
                className="border rounded md:w-72 md:h-96 mt-6 md:mr-8"
                src={`${Img}${items.backdrop_path}`}
                alt={items.title}
              />
              <div className="mt-10 md:mt-0">
                <p className="text-3xl md:text-5xl">
                  {items.original_title ? items.original_title : items.name}
                </p>
                <div className="flex mt-2 md:mt-7">
                  <img
                    className="w-7 h-7 md:w-9 h-9 mt-1"
                    src="/images/imdb_logo.png"
                    alt="imdb_logo"
                  />
                  <p className="mx-2 text-4xl">
                    {items.vote_average.toFixed(1)}
                  </p>
                </div>
                <div className=" grid gap-4 grid-cols-2 mt-5">
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <p className="font-light">Language</p>
                    <p className="font-semibold">
                      {items.original_language === "en"
                        ? "English"
                        : items.original_language}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 mt-3 md:mt-0">
                    <p className="font-light">Release Date</p>
                    <p className="font-semibold">
                      {items.release_date
                        ? items.release_date
                        : items.first_air_date}
                    </p>
                  </div>
                  <div className="w-full mt-3 md:mt-0">
                    <p className="font-light">Adult</p>
                    <p className="font-semibold">
                      {items.adult === false ? "False" : "True"}
                    </p>
                  </div>
                  <div className="w-full mt-3 md:mt-0">
                    <p className="font-light">Media Type</p>
                    <p className="font-semibold">
                      {items.media_type }
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-bold text-lg">Overview:</p>
                  <p className="text-sm md:text-base">{items.overview}</p>
                </div>
                <div className="mt-8">
                  <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5">
                    Website
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

    </>
  );
}

export default PageView;
