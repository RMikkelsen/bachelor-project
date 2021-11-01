import "./app.css";
import Contacts from "./components/contacts";
import LinkList from "./components/link-list";
import YouTube from "./components/youtube-main";

function App() {
  return (
    <div className="App">
      <h1>Ruth's Bachelor Project </h1>
      <h3>Learning Onboarding Portal</h3>
      <span className="blocks">
        <Contacts />
        <YouTube />
        <LinkList />
      </span>
    </div>
  );
}

export default App;
