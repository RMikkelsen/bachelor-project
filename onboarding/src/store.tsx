import create from "zustand";
// import { ListItem } from "./components/list/link-list-item";
import { v4 as uuidv4 } from "uuid";

export interface IListItem {
  id?: string;
  text?: string;
  isFavorite?: boolean;
}

export type LinkState = {
  addLink: (title: string) => void;
  removeLink: (index: number) => void;
  toggleFavorite: (index: number) => void;
};

const myuuid = uuidv4();

const useStore = create<LinkState>((set) => ({
  IListItem: [],
  addLink: () => set((state) => ({})),
  removeLink: () => set((state) => ({})),
  toggleFavorite: () => set((state) => ({})),
}));

export default useStore;

//need contact state
//getContacts()
//toggleStarred()
//need list state
//addLink()
//toggleStarred()
//removeLink()
//need video state
//addVideo()
//removeVideo
//toggleStarred()
