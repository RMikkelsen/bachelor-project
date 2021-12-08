import "../../app.css";
import { contactData } from "../../contact-data";
import { ContactItem } from "../../stores/contact-store";
import ContactListItem from "./contact";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Who to Contact: </h3>

      {contactData.map(({ name, email, slack, isFavorite }: ContactItem) => (
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
          <ContactListItem
            name={name}
            email={email}
            slack={slack}
            isFavorite={isFavorite}
          />
        </div>
      ))}
    </div>
  );
};
export default Contacts;
