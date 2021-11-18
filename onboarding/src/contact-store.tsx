import create from "zustand";
import { persist } from "zustand/middleware";

export type ContactItem = {
  name: string;
  email: string;
  slack: string;
  isFavorite: boolean;
};

export type ContactState = {
  contacts: Array<ContactItem>;
  // addLink: (text: string) => void;
  // removeLink: (index: number) => void;
  toggleFavorite: (index: number) => void;
};

export let useContactStore = create(
  persist(
    (set) => ({
      contacts: [],

      toggleFavorite: (index: number) =>
        set((state: ContactState) => ({
          contacts: state.contacts.map((contact, id) => {
            if (index !== id) {
              return contact;
            }
            return { ...contact, isFavorite: !contact.isFavorite };
          }),
        })),
    }),
    { name: "contacts" }
  )
);

export default useContactStore;

//add in a sort alphabetically
//add in a filter by isFavorite
