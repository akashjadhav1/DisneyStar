import React, {  useContext, useState } from "react";

import { userData } from "../App";

import Slider from "react-slick";
import { NavLink, useNavigate } from "react-router-dom";

import {  useFavorites } from "./FavouritesContext";

// export const DataContext = createContext()

function Carousel() {
  const navigate = useNavigate();
  const { data, searchResults } = useContext(userData);
  

  const [category, setCategory] = useState("all");
  //const [favourites,setFavourites] = useState([]);
  const { addToFavorites, favourites } = useFavorites();



  const Img = "https://image.tmdb.org/t/p/w500";

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
          autoplaySpeed: 10000,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const handleCategory = (item) => {
    setCategory(item);
  };

  const handleMovieClick = (movieId) => {
    // Navigate to the PageView component with the selected movieId
    navigate(`/preview/${movieId}`);
  };

  const isFavorite = (itemId) => {
    
    return favourites.some((fav) => fav.id === itemId);
  };

  return (
    <>
      <div className="mx-10">
        <div className="flex gap-1 ml-auto md:mr-4">
          <div
            onClick={() => handleCategory("all")}
            className={`text-center hover:bg-white/10 rounded ${
              category === "all" ? "bg-gray-700" : ""
            }`}
          >
            <p
              className={`mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased }`}
            >
              All
            </p>
          </div>

          <div
            onClick={() => handleCategory("movie")}
            className={`flex hover:bg-white/10 rounded ${
              category === "movie" ? "bg-gray-700" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-film mt-3 cursor-pointer "
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
            </svg>

            <p
              className={`mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased }`}
            >
              Movies
            </p>
          </div>

          <div
            onClick={() => handleCategory("tv")}
            className={`flex hover:bg-white/10 rounded ${
              category === "tv" ? "bg-gray-700" : ""
            }`}
          >
            <img
              className="w-5 h-5 mt-2 cursor-pointer "
              src="/images/movieLogo2.png"
              alt=""
            />

            <p className="mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased ">
              TV
            </p>
          </div>
          <NavLink to="/favourites">
            <div className={` hover:bg-white/10 rounded `}>
              <p className="mr-4 ml-2 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased ">
                Favourite
              </p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="p-7">
        <p></p>
        <Slider {...settings2} className="">
          {searchResults &&
            searchResults.map((items, index) => (
              <div key={index} className=" rounded ">
                <NavLink to={`/preview/${items.id}`}>
                  <img
                    className="w-64 h-48 mx-10 border mt-3 rounded cursor-pointer shadow-sky-500 shadow-xl"
                    src={`${Img}${items.poster_path}`}
                    alt={items.title}
                    onClick={() => handleMovieClick(items.id)}
                  />
                </NavLink>

                <div className="flex justify-center">
                  <p className="mx-10">
                    {items.release_date && items.release_date
                      ? items.release_date
                      : items.first_air_date}
                  </p>
                  <div className="flex">
                    <img
                      className="w-6 h-6"
                      src="/images/imdb_logo.png"
                      alt="imdb logo"
                    />{" "}
                    <p className="mx-2">{items.vote_average.toFixed(1)}</p>
                  </div>
                  <div>
                    <p className="mx-2">{items.media_type}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                <p
                  className={`text-center font-bold text-lg truncate ... mx-12 cursor-pointer`}
                >
                  {items.original_title ? items.original_title : items.name}
                </p>

                <button onClick={() => addToFavorites(items)}>
                    {isFavorite(items.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                      </svg>
                    )}
                  </button>
                </div>
               
              </div>
            ))}
        </Slider>
      </div>

      <div className="p-7">
        <p>Trending</p>
        <Slider {...settings} className="">
          {data
            .filter((item) =>
              category === "all"
                ? true
                : category === "movie"
                ? item.media_type === "movie"
                : item.media_type === "tv"
            )
            .map((items, index) => (
              <div key={index} className=" rounded ">
                
                <NavLink to={`/preview/${items.id}`} >
                  <img
                    className=" w-64 h-48 mx-10 border mt-3 rounded cursor-pointer shadow-sky-500 shadow-xl "
                    src={`${Img}${items.poster_path}`}
                    alt={items.title}
                    onClick={() => handleMovieClick(items.id)}
                  />
                </NavLink>

                <div className="flex justify-center">
                  <p className="mx-10">
                    {items.release_date
                      ? items.release_date.substring(0, 4)
                      : items.first_air_date.substring(0, 4)}
                  </p>
                  <div className="flex">
                    <img
                      className="w-7 h-7"
                      src="/images/imdb_logo.png"
                      alt="imdb logo"
                    />{" "}
                    <p className="">{items.vote_average.toFixed(1)}</p>
                  </div>
                  <div className="mx-7">
                    <p className="">
                      {items.media_type.charAt(0).toUpperCase() +
                        items.media_type.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p
                    className={`text-center font-bold text-lg truncate ... mx-12 cursor-pointer`}
                  >
                    {items.original_title ? items.original_title : items.name}
                  </p>

                  <button onClick={() => addToFavorites(items)}>
                    {isFavorite(items.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div className="p-7">
        <p>Top Upcoming</p>

        <Slider {...settings2} className="">
          {data.map((items, index) => (
            <div key={index} className=" rounded ">
              <NavLink to={`/preview/${items.id}`}>
                <img
                  className="w-64 h-48 mx-10 border mt-3 rounded cursor-pointer shadow-sky-500 shadow-xl"
                  src={`${Img}${items.poster_path}`}
                  alt={items.title}
                />
              </NavLink>

              <div className="flex justify-center">
                <p className="mx-10">
                  {items.release_date
                    ? items.release_date.substring(0, 4)
                    : items.first_air_date.substring(0, 4)}
                </p>
                <div className="flex">
                  <img
                    className="w-7 h-7"
                    src="/images/imdb_logo.png"
                    alt="imdb logo"
                  />
                  <p className="mx-2">{items.vote_average.toFixed(1)}</p>
                </div>

                <div className="mx-7">
                  <p className="">
                    {items.media_type.charAt(0).toUpperCase() +
                      items.media_type.slice(1)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p
                  className={`text-center font-bold text-lg truncate ... mx-12 cursor-pointer`}
                >
                  {items.original_title ? items.original_title : items.name}
                </p>

                <button onClick={() => addToFavorites(items)}>
                    {isFavorite(items.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                      </svg>
                    )}
                  </button>
                </div>

            </div>
          ))}
        </Slider>
      </div>

      <div className="p-7">
        <p>Recommended for you</p>

        <Slider {...settings2} className="">
          {data.reverse().map((items, index) => (
            <div key={index} className=" rounded ">
              <NavLink to={`/preview/${items.id}`}>
                <img
                  className="w-64 h-48 mx-10 border mt-3 rounded cursor-pointer shadow-sky-500 shadow-xl"
                  src={`${Img}${items.poster_path}`}
                  alt={items.title}
                  onClick={() => handleMovieClick(items.id)}
                />
              </NavLink>

              <div className="flex justify-center">
                <p className="mx-10">
                  {items.release_date
                    ? items.release_date.substring(0, 4)
                    : items.first_air_date.substring(0, 4)}
                </p>
                <div className="flex">
                  <img
                    className="w-7 h-7"
                    src="/images/imdb_logo.png"
                    alt="imdb logo"
                  />
                  <p className="mx-2">{items.vote_average.toFixed(1)}</p>
                </div>

                <div className="mx-7">
                  <p className="">
                    {items.media_type.charAt(0).toUpperCase() +
                      items.media_type.slice(1)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p
                  className={`text-center font-bold text-lg truncate ... mx-12 cursor-pointer`}
                >
                  {items.original_title ? items.original_title : items.name}
                </p>

                <button onClick={() => addToFavorites(items)}>
                    {isFavorite(items.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bookmark-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                      </svg>
                    )}
                  </button>
                </div> 
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
