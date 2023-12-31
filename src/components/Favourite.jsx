import Navbar from "./Navbar";
import { useFavorites } from "./FavouritesContext";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Favourite() {
  const Img = "https://image.tmdb.org/t/p/w500";
  // const favourites = useContext(DataContext);

  const { favourites, addToFavorites } = useFavorites();

  const isFavorite = (itemId) => {
    return favourites.some((fav) => fav.id === itemId);
  };

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-3xl font-bold mb-4 mx-10">My Favourites</h1>
        {favourites.length === 0 ? (
          <p className="font-bold text-center">No favourites yet.</p>
        ) : (
          <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {favourites.map((items, index) => (
              <>
              <div className="flex w-80">
                <div key={index} className="rounded">
                  <NavLink to={`/preview/${items.id}`}>
                    <img
                      className=" w-72 h-48 mx-5 border mt-3 rounded cursor-pointer"
                      src={`${Img}${items.poster_path}`}
                      alt={items.title}
                    />
                  </NavLink>

                  <div className="flex mt-3 justify-between">
                    <p className="mx-14 font-light">
                      {items.release_date
                        ? items.release_date.substring(0, 4)
                        : items.first_air_date.substring(0, 4)}
                    </p>
                    <div className="flex ">
                      <img
                        className="w-7 h-7"
                        src="/images/imdb_logo.png"
                        alt="imdb logo"
                      />{" "}
                      <p className="mx-2 font-light">
                        {items.vote_average.toFixed(1)}
                      </p>
                    </div>
                    <div>
                      <p className="mx-2 font-light">
                        {items.media_type.charAt(0).toUpperCase() +
                          items.media_type.slice(1)}
                      </p>
                    </div>
                    <div className="mt-1">
                      <button onClick={() => addToFavorites(items)}>
                        {isFavorite(items.id) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-bookmark"
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
                            class="bi bi-bookmark-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <p
                      className={`mx-5 font-bold text-lg text-center cursor-pointer`}
                    >
                      {items.original_title ? items.original_title : items.name}
                    </p>
                    <hr />
                  </div>
                </div>
                
              </div>
              
              </>
            ))}
           
          </div>
        )}

      <Footer/>
      </div>
    </>
  );
}

export default Favourite;
