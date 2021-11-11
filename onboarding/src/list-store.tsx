import create from "zustand";
import { persist } from "zustand/middleware";

export type ListItem = {
  text?: string;
  isFavorite?: boolean;
};

export type LinkState = {
  links: Array<ListItem>;
  addLink: (text: string) => void;
  removeLink: (index: number) => void;
  toggleFavorite: (index: number) => void;
};

export let useListStore = create(
  persist(
    (set) => ({
      links: [],
      addLink: (text: string) =>
        set((state: LinkState) => ({
          links: [...state.links, { text: text }],
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
    }),
    { name: "links" }
  )
);

export default useListStore;
