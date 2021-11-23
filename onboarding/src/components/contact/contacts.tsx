import "../../app.css";
import { contactData } from "../../contact-data";
import useContactStore, {
  ContactItem,
  ContactState,
} from "../../contact-store";
import ContactListItem from "./contact";

const Contacts = () => {
  const contacts = useContactStore((state: ContactState) => state.contacts);

  return (
    <div className="contacts">
      <h3>Who to Contact: </h3>
      <ContactListItem
        name={""}
        email={""}
        slack={""}
        isFavorite={true}
        index={0}
      />
      {contactData.map(({ name, email, slack }) => (
        <div className="contact">
          <p>
            <strong>Contact:</strong> {name}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Slack: </strong>
            {slack}
          </p>
        </div>
      ))}

      {contacts.map(
        ({ name, email, slack, isFavorite }: ContactItem, index: number) => (
          <ContactListItem
            name={name}
            isFavorite={isFavorite}
            index={index}
            email={email}
            slack={slack}
            // key={`item-${name}-${index}`}
          />
        )
      )}
    </div>
  );
};
export default Contacts;
