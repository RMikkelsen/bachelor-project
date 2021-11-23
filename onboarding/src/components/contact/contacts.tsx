import "../../app.css";
import useContactStore, { ContactState } from "../../contact-store";
import ContactListItem from "./contact";

const Contacts = () => {
  const contacts = useContactStore((state: ContactState) => state.contacts);

  return (
    <div className="contacts">
      <h3>Who to Contact: </h3>
      <ContactListItem
        name={""}
        isFavorite={true}
        index={0}
        email={""}
        slack={""}
      />
      ¨<div className="contacts"></div>
      {/* {contacts.map(({ name, isFavorite }: ContactItem, index: number) => ( */}
      {/* ))} */}
    </div>
  );
};
export default Contacts;
