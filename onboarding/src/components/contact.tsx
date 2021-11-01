import "../app.css";

type ContactProps = {
  name?: string;
  email?: string;
  slackName?: string;
  competences?: string;
};

const Contact = () => {
  return (
    <div className="contact">
      <p>Contact Name </p>
      <p>Email@email.com </p>
      <p> Slack Name </p>
      <p>Competences </p>
    </div>
  );
};
export default Contact;
