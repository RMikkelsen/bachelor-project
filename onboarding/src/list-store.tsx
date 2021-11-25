import create from "zustand";
import { persist } from "zustand/middleware";

export type ListItem = {
  text: string;
  isFavorite: boolean;
};

export type LinkState = {
  links: Array<ListItem>;
  addLink: (text: string) => void;
  removeLink: (index: number) => void;
  toggleFavorite: (index: number) => void;
  filterFavorite: () => void;
};

export let useListStore = create(
  persist(
    (set) => ({
      links: [],
      addLink: (text: string) =>
        set((state: LinkState) => ({
          links: [...state.links, { text }],
        })),
      removeLink: (index: number) =>
        set((state: LinkState) => ({
          links: state.links.filter((link, id) => id !== index),
        })),
      toggleFavorite: (index: number) =>
        set((state: LinkState) => ({
          links: state.links.map((link, id) => {
            if (index !== id) {
              return link;
            }
            return { ...link, isFavorite: !link.isFavorite };
          }),
        })),
      filterFavorite: () =>
        set((state: LinkState) => ({
          links: state.links.filter((link, id) => {
            if (link.isFavorite === true) {
            }
            return { ...link, isFavorite: link.isFavorite === true };
          }),
        })),
    }),

    { name: "links" }
  )
);

export default useListStore;

//add in a sort alphabetically
//add in a filter by isFavorite
