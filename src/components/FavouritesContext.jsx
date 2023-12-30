// FavoritesContext.js
import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavorites = (item) => {
    // Check if the item is already in favorites
    const isAlreadyInFavorites = favourites.some((fav) => fav.id === item.id);

    if (isAlreadyInFavorites) {
      // If it's already in favorites, remove it
      const updatedFavorites = favourites.filter((fav) => fav.id !== item.id);
      setFavourites(updatedFavorites);
    } else {
      // If it's not in favorites, add it
      setFavourites([...favourites, item]);
    }
}


  return (
    <FavoritesContext.Provider value={{ favourites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
