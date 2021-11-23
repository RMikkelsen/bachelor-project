import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import useContactStore, {
  ContactItem,
  ContactState,
} from "../../contact-store";
import { Checkbox } from "@mui/material";
import { contactData } from "../../contact-data";

// type ContactProps = {
//   name?: string;
//   email?: string;
//   slack?: string;
//   isFavorite?: boolean;
// };

// const Contact: FC<ContactProps> = ({ name, email, slack }) => {
function ContactListItem({
  name,
  slack,
  email,
  isFavorite,
  index,
}: ContactItem & { index: number }) {
  let toggleStarred = useContactStore(
    (state: ContactState) => state.toggleFavorite
  );

  return (
    <>
      {contactData.map(({ name, email, slack }) => (
        <div className="contact">
          <p>
            <strong>Contact:</strong> {name}
          </p>
          <p>
            <strong>Email: </strong>
            {slack}
          </p>
          <p>
            <strong>Slack: </strong>
            {email}
          </p>

          <Checkbox
            className="contactToggle"
            checked={isFavorite}
            onChange={() => {
              toggleStarred(index);
            }}
            value={name}
            icon={<StarsIcon className="starLink" color="action" />}
            checkedIcon={<StarsIcon className="starLink" color="inherit" />}
          />
        </div>
      ))}
    </>
  );
}
export default ContactListItem;
