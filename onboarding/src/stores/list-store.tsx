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
};

export let useListStore = create(
  persist(
    (set) => ({
      links: [],
      addLink: (text: string) => {
        if (!text) return;
        set((state: LinkState) => ({
          links: [...state.links, { text }],
        }));
      },

      removeLink: (index: number) =>
        set((state: LinkState) => ({
          links: state.links.filter((_link, id) => id !== index),
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

//inspired code from Ankur Kedia https://codesandbox.io/s/todo-zustand-react-jbwi0?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.tsx
