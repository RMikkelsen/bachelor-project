import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";

type ContactProps = {
  name?: string;
  email?: string;
  slack?: string;
};

const Contact: FC<ContactProps> = ({ name, email, slack }) => {
  return (
    <div className="contact">
      <p>Contact: {name} </p>
      <p>Email: {email}</p>
      <p>Slack Name: {slack} </p>
      <StarsIcon className="star" color="inherit" />
    </div>
  );
};
export default Contact;
