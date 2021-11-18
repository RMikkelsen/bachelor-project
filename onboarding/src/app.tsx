import "./app.css";
import Contacts from "./components/contact/contacts";
import LinkList from "./components/list/link-list";
import YouTube from "./components/youtube/youtube-main";

function App() {
  return (
    <div className="App">
      <h1>Developer Onboarding Portal</h1>
      <span className="blocks">
        <Contacts />

        <YouTube />

        <LinkList />
      </span>
    </div>
  );
}

export default App;
