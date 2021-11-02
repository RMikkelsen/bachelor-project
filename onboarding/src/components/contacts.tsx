import "../app.css";
import Contact from "./contact";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Who to Contact: </h3>
      <Contact name={"Ruth"} email={"xyz@impact.dk"} slack={"@RMM"} />
      <Contact name={"Frederik"} email={"xyz@impact.dk"} slack={"@FS"} />
      <Contact name={"Michael"} email={"xyz@impact.dk"} slack={"@MKH"} />
      <Contact name={"Steven"} email={"xyz@impact.dk"} slack={"@STS"} />
      <Contact name={"Simone"} email={"xyz@impact.dk"} slack={"@SIM"} />
    </div>
  );
};
export default Contacts;
