import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import useContactStore, { ContactItem } from "../../contact-store";
import { Checkbox } from "@mui/material";

function ContactListItem({ email }: ContactItem) {
  const { toggleFavorite, favoriteContacts } = useContactStore();

  return (
    <>
      <Checkbox
        className="contactToggle"
        checked={(favoriteContacts as string[]).includes(email)}
        onChange={() => {
          toggleFavorite(email);
        }}
        // value={name}
        icon={<StarsIcon className="starLink" color="action" />}
        checkedIcon={<StarsIcon className="starLink" color="inherit" />}
      />
    </>
  );
}
export default ContactListItem;
