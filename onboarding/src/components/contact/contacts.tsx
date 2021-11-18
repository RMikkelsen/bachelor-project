import "../../app.css";
import useContactStore, {
  ContactItem,
  ContactState,
} from "../../contact-store";
import ContactListItem from "./contact";

const Contacts = () => {
  const contacts = useContactStore((state: ContactState) => state.contacts);
  console.log(contacts);
  return (
    <div className="contacts">
      <h3>Who to Contact: </h3>
      <ContactListItem
        name={"Ruth"}
        isFavorite={false}
        index={0}
        email={""}
        slack={""}
      />
      <ContactListItem
        name={"Frederik"}
        isFavorite={false}
        index={1}
        email={""}
        slack={""}
      />
      <ContactListItem
        name={"Louise"}
        isFavorite={true}
        index={2}
        email={""}
        slack={""}
      />
      <ContactListItem
        name={"Simone"}
        isFavorite={true}
        index={3}
        email={""}
        slack={""}
      />

      {/* {contacts.map(({ name, isFavorite }: ContactItem, index: number) => ( */}
      {/* <ContactListItem
          name={"Ruth"}
          isFavorite={isFavorite}
          index={index}
          email={"impact@xyz.com"}
          slack={"ABC"}
          key={`item-${"Ruth"}-${index}`}
        /> */}
      {/* ))} */}

      {/* <Contact text={"Frederik"} email={"xyz@impact.dk"} slack={"@FS"} />
      <Contact text={"Michael"} email={"xyz@impact.dk"} slack={"@MKH"} />
      <Contact text={"Steven"} email={"xyz@impact.dk"} slack={"@STS"} />
      <Contact text={"Simone"} email={"xyz@impact.dk"} slack={"@SIM"} /> */}
    </div>
  );
};
export default Contacts;
