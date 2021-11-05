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

export const useStore = create<LinkState>((set) => ({
  links: [],
  addLink: (text: string) =>
    set((state) => ({ links: [...state.links, { text: text }] })),
  removeLink: (index: number) =>
    set((state) => ({ links: state.links.filter((link, id) => id !== index) })),
  toggleFavorite: (index: number) =>
    set((state) => ({
      links: state.links.map((link, id) => {
        if (index !== id) {
          return link;
        }
        return { ...link, isFavorite: !link.isFavorite };
      }),
    })),
}));

export default useStore;

//need contact state
//getContacts()
//toggleStarred()

//need video state
//addVideo()
//removeVideo
//toggleStarred()
