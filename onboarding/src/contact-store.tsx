import create from "zustand";
import { persist } from "zustand/middleware";

export type ContactItem = {
  name: string;
  email: string;
  slack: string;
  isFavorite?: boolean;
};

export type ContactState = {
  favoriteContacts: string[];
  toggleFavorite: (email: string) => void;
};

export let useContactStore = create(
  persist(
    (set) => ({
      favoriteContacts: [],
      toggleFavorite: (email: string) => {
        set((state: ContactState) => {
          const { favoriteContacts } = state;
          const updatedFavorites = [...favoriteContacts];
          const favoriteIndex = favoriteContacts.findIndex(
            (f: string) => f === email
          );
          if (favoriteIndex > -1) {
            updatedFavorites.splice(favoriteIndex, 1);
          } else {
            updatedFavorites.push(email);
          }
          return {
            ...state,
            favoriteContacts: updatedFavorites,
          };
        });
      },
    }),
    { name: "contacts" }
  )
);

export default useContactStore;

//add in a sort alphabetically
//add in a filter by isFavorite
