import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import useContactStore, {
  ContactItem,
  ContactState,
} from "../../contact-store";
import { Checkbox } from "@mui/material";
import { contactData } from "../../contact-data";

function ContactListItem({
  isFavorite,
  index,
}: ContactItem & { index: number }) {
  let toggleStarred = useContactStore(
    (state: ContactState) => state.toggleFavorite
  );

  return (
    <>
      <Checkbox
        className="contactToggle"
        checked={isFavorite}
        onChange={() => {
          toggleStarred(index);
        }}
        // value={name}
        icon={<StarsIcon className="starLink" color="action" />}
        checkedIcon={<StarsIcon className="starLink" color="inherit" />}
      />
    </>
  );
}
export default ContactListItem;
